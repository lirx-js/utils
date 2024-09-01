import { AbortablePromiseFactory } from './abortable-promise-factory.js';
import { PromiseOrValue } from './promise-or-value.js';

/**
 * Runs `factory` if `signal` is not aborted, with a new signal aborted when the result is resolved.
 * All of this, wrapped it into a Promise, to ensure that a Promise is always returned , even in the case of an error.
 */
export function promiseRun<GValue>(
  factory: AbortablePromiseFactory<GValue>,
  signal?: AbortSignal,
): Promise<GValue> {
  const controller: AbortController = new AbortController();

  return new Promise<GValue>((resolve: (value: PromiseOrValue<GValue>) => void): void => {
    signal?.throwIfAborted();

    resolve(
      factory(
        signal === undefined ? controller.signal : AbortSignal.any([controller.signal, signal]),
      ),
    );
  }).finally((): void => {
    controller.abort();
  });
}
