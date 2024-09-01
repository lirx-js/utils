import {
  ICustomError,
  ICustomErrorMessageOptionalOptions
} from '../custom-error/custom-error.type.js';
import { ILockErrorName } from './lock-error-name.constant.js';

export interface ILockErrorOptions extends ICustomErrorMessageOptionalOptions {
}

export interface ILockErrorProperties {
}

export type ILockError = ICustomError<ILockErrorName, ILockErrorProperties>;
