import { createCustomError } from '../custom-error/create-custom-error.js';
import { ABORT_ERROR_NAME, IAbortErrorName } from './abort-error-name.constant.js';
import { IAbortError, IAbortErrorOptions, IAbortErrorProperties } from './abort-error.type.js';

/**
 * @deprecated
 */
export function createAbortError(options?: IAbortErrorOptions): IAbortError {
  return createCustomError<IAbortErrorName, IAbortErrorProperties>({
    name: ABORT_ERROR_NAME,
    message: typeof options?.signal?.reason === 'string' ? options!.signal!.reason : 'Aborted',
    signal: void 0,
    ...options,
  });
}
