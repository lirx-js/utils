import type { UndoFunction } from '../undo/undo-function.js';
import { createAnimationFrame } from './create-animation-frame.js';

export function createAnimationFrameLoop(callback: () => void): UndoFunction {
  let running: boolean = true;
  let abortAnimationFrame: UndoFunction;

  const loop = () => {
    abortAnimationFrame = createAnimationFrame(() => {
      callback();
      if (running) {
        loop();
      }
    });
  };

  loop();

  return (): void => {
    if (running) {
      running = false;
      abortAnimationFrame();
    }
  };
}
