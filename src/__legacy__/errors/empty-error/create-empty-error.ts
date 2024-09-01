import { createCustomError } from '../custom-error/create-custom-error.js';
import { EMPTY_ERROR_NAME, IEmptyErrorName } from './empty-error-name.constant.js';
import { IEmptyError, IEmptyErrorOptions, IEmptyErrorProperties } from './empty-error.type.js';

/**
 * @deprecated
 */
export function createEmptyError(options?: IEmptyErrorOptions): IEmptyError {
  return createCustomError<IEmptyErrorName, IEmptyErrorProperties>({
    name: EMPTY_ERROR_NAME,
    message: 'Empty',
    ...options,
  });
}
