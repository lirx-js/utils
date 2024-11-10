import type { UndoFunction } from '../undo/undo-function.js';

/** FUNCTION **/

export function createIdle(
  callback: IdleRequestCallback,
  options?: IdleRequestOptions,
): UndoFunction {
  const timer = requestIdleCallback(callback, options);
  return () => {
    cancelIdleCallback(timer);
  };
}
