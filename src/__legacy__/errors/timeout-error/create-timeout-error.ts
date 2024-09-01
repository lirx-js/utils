import { createCustomError } from '../custom-error/create-custom-error.js';
import { ITimeoutErrorName, TIMEOUT_ERROR_NAME } from './timeout-error-name.constant.js';
import {
  ITimeoutError,
  ITimeoutErrorOptions,
  ITimeoutErrorProperties,
} from './timeout-error.type.js';

/**
 * @deprecated
 */
export function createTimeoutError(options?: ITimeoutErrorOptions): ITimeoutError {
  return createCustomError<ITimeoutErrorName, ITimeoutErrorProperties>({
    name: TIMEOUT_ERROR_NAME,
    message: 'Timeout',
    ...options,
  });
}
