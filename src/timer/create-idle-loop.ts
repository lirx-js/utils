import type { UndoFunction } from '../undo/undo-function.js';
import { createIdle } from './create-idle.js';

export function createIdleLoop(callback: () => void, options?: IdleRequestOptions): UndoFunction {
  let running: boolean = true;
  let abortIdle: UndoFunction;

  const loop = () => {
    abortIdle = createIdle(() => {
      callback();
      if (running) {
        loop();
      }
    }, options);
  };

  loop();

  return (): void => {
    if (running) {
      running = false;
      abortIdle();
    }
  };
}
