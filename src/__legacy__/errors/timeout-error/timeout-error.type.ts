import {
  ICustomError,
  ICustomErrorMessageOptionalOptions
} from '../custom-error/custom-error.type.js';
import { ITimeoutErrorName } from './timeout-error-name.constant.js';

export interface ITimeoutErrorOptions extends ICustomErrorMessageOptionalOptions {
}

export interface ITimeoutErrorProperties {
}

export type ITimeoutError = ICustomError<ITimeoutErrorName, ITimeoutErrorProperties>;
