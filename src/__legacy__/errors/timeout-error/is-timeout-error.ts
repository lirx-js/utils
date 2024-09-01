import { isCustomError } from '../custom-error/is-custom-error.js';
import { ITimeoutErrorName, TIMEOUT_ERROR_NAME } from './timeout-error-name.constant.js';
import { ITimeoutError, ITimeoutErrorProperties } from './timeout-error.type.js';

/**
 * @deprecated
 */
export function isTimeoutError(value: unknown): value is ITimeoutError {
  return isCustomError<ITimeoutErrorName, ITimeoutErrorProperties>(value, TIMEOUT_ERROR_NAME);
}
