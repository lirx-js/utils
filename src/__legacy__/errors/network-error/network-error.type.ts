import {
  ICustomError,
  ICustomErrorMessageOptionalOptions
} from '../custom-error/custom-error.type.js';
import { INetworkErrorName } from './network-error-name.constant.js';

export interface INetworkErrorOptions extends ICustomErrorMessageOptionalOptions {
  status?: number;
}

export interface INetworkErrorProperties {
  readonly status: number | undefined;
}

export type INetworkError = ICustomError<INetworkErrorName, INetworkErrorProperties>;
