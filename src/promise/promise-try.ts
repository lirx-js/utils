import { PromiseFactory } from './promise-factory.js';
import { PromiseOrValue } from './promise-or-value.js';

/**
 * Runs `factory` if `signal` is not aborted, wrapped it into a Promise, to ensure that a Promise is always returned , even in the case of an error.
 */
export function promiseTry<GValue>(
  factory: PromiseFactory<GValue>,
  signal?: AbortSignal,
): Promise<GValue> {
  return new Promise<GValue>((resolve: (value: PromiseOrValue<GValue>) => void): void => {
    signal?.throwIfAborted();
    resolve(factory(signal));
  });
}
