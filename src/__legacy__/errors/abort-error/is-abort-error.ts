import { isCustomError } from '../custom-error/is-custom-error.js';
import { ABORT_ERROR_NAME, IAbortErrorName } from './abort-error-name.constant.js';
import { IAbortError, IAbortErrorProperties } from './abort-error.type.js';

/**
 * @deprecated
 */
export function isAbortError(value: unknown): value is IAbortError {
  return isCustomError<IAbortErrorName, IAbortErrorProperties>(value, ABORT_ERROR_NAME);
}

/**
 * @deprecated
 */
export function isAbortErrorWithSignal(value: any, signal: AbortSignal): value is IAbortError {
  return isAbortError(value) && value.signal === signal;
}
