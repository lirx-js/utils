import { isCustomError } from '../custom-error/is-custom-error';
import { ILockErrorName, LOCK_ERROR_NAME } from './lock-error-name.constant';
import { ILockError, ILockErrorProperties } from './lock-error.type';

export function isLockError(
  value: unknown,
): value is ILockError {
  return isCustomError<ILockErrorName, ILockErrorProperties>(
    value,
    LOCK_ERROR_NAME,
  );
}

