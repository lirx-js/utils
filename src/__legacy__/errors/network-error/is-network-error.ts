import { isCustomError } from '../custom-error/is-custom-error.js';
import { INetworkErrorName, NETWORK_ERROR_NAME } from './network-error-name.constant.js';
import { INetworkError, INetworkErrorProperties } from './network-error.type.js';

/**
 * @deprecated
 */
export function isNetworkError(value: unknown): value is INetworkError {
  return isCustomError<INetworkErrorName, INetworkErrorProperties>(value, NETWORK_ERROR_NAME);
}
