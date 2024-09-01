import type { UndoFunction } from '../undo/undo-function.js';

export function createAnimationFrame(callback: () => void): UndoFunction {
  const timer = requestAnimationFrame(callback);
  return (): void => {
    cancelAnimationFrame(timer);
  };
}
