import { AbortablePromiseFactory } from './abortable-promise-factory.js';
import { InferPromiseFactoriesAwaitedReturns } from './infer-promise-factories-awaited-returns.js';
import { PromiseOrValue } from './promise-or-value.js';
import { promiseRun } from './promise-run.js';

/**
 * Resolves multiple Promise factories.
 * All of them receive a signal, which is aborted right after any rejects or all fulfill.
 */
export function promiseAll<GFactories extends readonly AbortablePromiseFactory<unknown>[] | []>(
  values: GFactories,
  signal?: AbortSignal,
): Promise<InferPromiseFactoriesAwaitedReturns<GFactories>>;
export function promiseAll<GValue>(
  values: Iterable<AbortablePromiseFactory<GValue>>,
  signal?: AbortSignal,
): Promise<GValue[]>;
export function promiseAll<GValue>(
  values: Iterable<AbortablePromiseFactory<GValue>>,
  signal?: AbortSignal,
): Promise<GValue[]> {
  return promiseRun<GValue[]>((signal: AbortSignal): Promise<GValue[]> => {
    return Promise.all<GValue>(
      Array.from(values, (factory: AbortablePromiseFactory<GValue>): Promise<GValue> => {
        return new Promise<GValue>((resolve: (value: PromiseOrValue<GValue>) => void): void => {
          resolve(factory(signal));
        });
      }),
    );
  }, signal);
}
