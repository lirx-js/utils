import { createCustomError } from '../custom-error/create-custom-error.js';
import { ILockErrorName, LOCK_ERROR_NAME } from './lock-error-name.constant.js';
import { ILockError, ILockErrorOptions, ILockErrorProperties } from './lock-error.type.js';

/**
 * @deprecated
 */
export function createLockError(options?: ILockErrorOptions): ILockError {
  return createCustomError<ILockErrorName, ILockErrorProperties>({
    name: LOCK_ERROR_NAME,
    message: 'Locked',
    ...options,
  });
}
