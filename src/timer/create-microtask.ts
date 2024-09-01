import type { UndoFunction } from '../undo/undo-function.js';

export function createMicrotask(callback: () => void): UndoFunction {
  let running: boolean = true;
  queueMicrotask((): void => {
    if (running) {
      callback();
    }
  });
  return (): void => {
    running = false;
  };
}
