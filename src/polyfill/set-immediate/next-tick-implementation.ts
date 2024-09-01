import { IRegisterImmediate } from './register-immediate.type.js';
import { runTask } from './run-task.js';

/** NEXT TICK **/

export function nextTickImplementation(process: any): IRegisterImmediate {
  return (handle: number) => {
    process.nextTick(() => {
      runTask(handle);
    });
  };
}
