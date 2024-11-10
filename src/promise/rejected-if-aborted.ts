/**
 * Use `promiseWrap` when possible
 */
export function rejectedIfAborted(signal?: AbortSignal): Promise<void> {
  return new Promise<void>((resolve: () => void, reject: (reason?: unknown) => void): void => {
    if (signal !== undefined) {
      if (signal.aborted) {
        throw signal.reason;
      } else {
        signal.addEventListener(
          'abort',
          (): void => {
            reject(signal.reason);
          },
          { once: true },
        );
      }
    }
  });
}
