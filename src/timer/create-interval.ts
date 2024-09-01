import type { UndoFunction } from '../undo/undo-function.js';

export function createInterval(callback: () => void, interval: number): UndoFunction {
  const timer = setInterval(callback, interval);
  return (): void => {
    clearInterval(timer);
  };
}
