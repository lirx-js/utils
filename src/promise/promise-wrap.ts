/**
 * Wraps a Promise with an AbortSignal.
 *
 * If `signal` is aborted, then the Promise is rejected with this signal's reason.
 *
 * WARN: always prefer to use promiseTry and handle the signal by yourself when possible.
 *  `promiseWrap` should only be used when a Promise already exists and you have it to throw if `signal` aborts.
 */
export function promiseWrap<GValue>(
  promise: Promise<GValue>,
  signal?: AbortSignal,
): Promise<GValue> {
  if (signal === undefined) {
    return promise;
  } else {
    return new Promise<GValue>(
      (resolve: (value: GValue) => void, reject: (reason?: unknown) => void): void => {
        signal.throwIfAborted();

        const end = (): void => {
          signal.removeEventListener('abort', onAbort);
        };

        const _resolve = (value: GValue): void => {
          end();
          resolve(value);
        };

        const _reject = (reason?: unknown): void => {
          end();
          reject(reason);
        };

        const onAbort = (): void => {
          end();
          _reject(signal.reason);
        };

        signal.addEventListener('abort', onAbort);

        promise.then(_resolve, _reject);
      },
    );
  }
}
