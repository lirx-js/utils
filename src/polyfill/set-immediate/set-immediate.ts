import { getGlobalThis } from '../get-global-this.js';
import { getRegisterImmediateImplementation } from './get-register-immediate-implementation.js';
import { IRegisterImmediate } from './register-immediate.type.js';
import { TASKS } from './tasks.constant.js';

let registerImmediate: IRegisterImmediate;
let nextHandle: number = 1;

export function setImmediate<GArguments extends any[]>(
  callback: (...args: GArguments) => void,
  ...args: GArguments
): number {
  if (registerImmediate === void 0) {
    registerImmediate = getRegisterImmediateImplementation(getGlobalThis());
  }
  TASKS.set(nextHandle, { callback: callback as any, args });
  registerImmediate(nextHandle);
  return nextHandle++;
}

export function clearImmediate(handle: number): void {
  TASKS.delete(handle);
}
