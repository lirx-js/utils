import { isCustomError } from '../custom-error/is-custom-error.js';
import { EMPTY_ERROR_NAME, IEmptyErrorName } from './empty-error-name.constant.js';
import { IEmptyError, IEmptyErrorProperties } from './empty-error.type.js';

/**
 * @deprecated
 */
export function isEmptyError(value: unknown): value is IEmptyError {
  return isCustomError<IEmptyErrorName, IEmptyErrorProperties>(value, EMPTY_ERROR_NAME);
}
