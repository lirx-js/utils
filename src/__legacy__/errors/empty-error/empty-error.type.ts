import {
  ICustomError,
  ICustomErrorMessageOptionalOptions
} from '../custom-error/custom-error.type.js';
import { IEmptyErrorName } from './empty-error-name.constant.js';

export interface IEmptyErrorOptions extends ICustomErrorMessageOptionalOptions {
}

export interface IEmptyErrorProperties {
}

export type IEmptyError = ICustomError<IEmptyErrorName, IEmptyErrorProperties>;
