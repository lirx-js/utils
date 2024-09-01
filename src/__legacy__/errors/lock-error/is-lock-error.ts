import { isCustomError } from '../custom-error/is-custom-error.js';
import { ILockErrorName, LOCK_ERROR_NAME } from './lock-error-name.constant.js';
import { ILockError, ILockErrorProperties } from './lock-error.type.js';

/**
 * @deprecated
 */
export function isLockError(value: unknown): value is ILockError {
  return isCustomError<ILockErrorName, ILockErrorProperties>(value, LOCK_ERROR_NAME);
}
