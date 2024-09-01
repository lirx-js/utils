import { IRegisterImmediate } from './register-immediate.type.js';
import { runTask } from './run-task.js';

/** SET TIMEOUT **/

export function setTimeoutImplementation(): IRegisterImmediate {
  return (handle: number) => {
    setTimeout(runTask, 0, handle);
  };
}
