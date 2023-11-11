import { IAbortTimer } from './abort-timer.type';

export function createMicrotask(
  callback: () => void,
): IAbortTimer {
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
