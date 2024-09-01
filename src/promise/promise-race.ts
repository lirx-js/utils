import { AbortablePromiseFactory } from './abortable-promise-factory.js';
import { InferPromiseFactoriesAwaitedReturns } from './infer-promise-factories-awaited-returns.js';
import { PromiseOrValue } from './promise-or-value.js';
import { promiseRun } from './promise-run.js';

/**
 * Races between multiple Promise factories.
 * All of them receive a signal, which is aborted right after any resolves.
 */
export function promiseRace<GFactories extends readonly AbortablePromiseFactory<unknown>[] | []>(
  values: GFactories,
  signal?: AbortSignal,
): Promise<InferPromiseFactoriesAwaitedReturns<GFactories>[number]>;
export function promiseRace<GValue>(
  values: Iterable<AbortablePromiseFactory<GValue>>,
  signal?: AbortSignal,
): Promise<GValue>;
export function promiseRace<GValue>(
  values: Iterable<AbortablePromiseFactory<GValue>>,
  signal?: AbortSignal,
): Promise<GValue> {
  return promiseRun<GValue>((signal: AbortSignal): Promise<GValue> => {
    return Promise.race<GValue>(
      Array.from(values, (factory: AbortablePromiseFactory<GValue>): Promise<GValue> => {
        return new Promise<GValue>((resolve: (value: PromiseOrValue<GValue>) => void): void => {
          resolve(factory(signal));
        });
      }),
    );
  }, signal);
}
