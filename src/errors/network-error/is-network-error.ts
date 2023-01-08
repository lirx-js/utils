import { isCustomError } from '../custom-error/is-custom-error';
import { INetworkErrorName, NETWORK_ERROR_NAME } from './network-error-name.constant';
import { INetworkError, INetworkErrorProperties } from './network-error.type';

export function isNetworkError(
  value: unknown,
): value is INetworkError {
  return isCustomError<INetworkErrorName, INetworkErrorProperties>(
    value,
    NETWORK_ERROR_NAME,
  );
}

