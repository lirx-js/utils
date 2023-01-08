import { isCustomError } from '../custom-error/is-custom-error';
import { ITimeoutErrorName, TIMEOUT_ERROR_NAME } from './timeout-error-name.constant';
import { ITimeoutError, ITimeoutErrorProperties } from './timeout-error.type';

export function isTimeoutError(
  value: unknown,
): value is ITimeoutError {
  return isCustomError<ITimeoutErrorName, ITimeoutErrorProperties>(
    value,
    TIMEOUT_ERROR_NAME,
  );
}

