import type { UndoFunction } from '../undo/undo-function.js';

export function createTimeout(callback: () => void, timeout: number): UndoFunction {
  const timer = setTimeout(callback, timeout);
  return (): void => {
    clearTimeout(timer);
  };
}
