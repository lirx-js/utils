import {
  ICustomError,
  ICustomErrorMessageOptionalOptions
} from '../custom-error/custom-error.type.js';
import { IAbortErrorName } from './abort-error-name.constant.js';

export interface IAbortErrorOptions extends ICustomErrorMessageOptionalOptions {
  signal?: AbortSignal;
}

export interface IAbortErrorProperties {
  readonly signal: AbortSignal | undefined;
}

export type IAbortError = ICustomError<IAbortErrorName, IAbortErrorProperties>;
