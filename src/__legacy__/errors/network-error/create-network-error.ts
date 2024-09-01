import { createCustomError } from '../custom-error/create-custom-error.js';
import { INetworkErrorName, NETWORK_ERROR_NAME } from './network-error-name.constant.js';
import {
  INetworkError,
  INetworkErrorOptions,
  INetworkErrorProperties,
} from './network-error.type.js';

/**
 * @deprecated
 */
export function createNetworkError(options?: INetworkErrorOptions): INetworkError {
  return createCustomError<INetworkErrorName, INetworkErrorProperties>({
    name: NETWORK_ERROR_NAME,
    message: 'Network Error',
    status: void 0,
    ...options,
  });
}

/**
 * @deprecated
 */
export function createNetworkErrorFromRequest(request: Request): INetworkError {
  return createNetworkError({ message: `${request.method} '${request.url}'` });
}

/**
 * @deprecated
 */
export function createNetworkErrorFromResponse(response: Response): INetworkError {
  return createNetworkError({
    message: `${response.status} '${response.url}'`,
    status: response.status,
  });
}
