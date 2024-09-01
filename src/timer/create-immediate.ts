import { clearImmediate, setImmediate } from '../polyfill/set-immediate/set-immediate.js';
import type { UndoFunction } from '../undo/undo-function.js';

export function createImmediate(callback: () => void): UndoFunction {
  const timer = setImmediate(callback);
  return (): void => {
    clearImmediate(timer);
  };
}
