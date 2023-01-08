import { clearImmediate, setImmediate } from '../polyfill/set-immediate/set-immediate';
import { IAbortTimer } from './abort-timer.type';

export function createImmediate(
  callback: () => void,
): IAbortTimer {
  const timer = setImmediate(callback);
  return (): void => {
    clearImmediate(timer);
  };
}
