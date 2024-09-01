import { ICustomErrorMessageOptionalOptions } from '../custom-error/custom-error.type.js';
import { normalizeRangeOptions } from './normalize-range-options.js';
import {
  IGenericRangeErrorOptions,
  IRangeError,
  IRangeOptions,
  IRangeOptionsNormalized,
  IRangeOptionsWithVariableName,
} from './range-error.type.js';

/**
 * @deprecated
 */
export function createRangeError(variableName: string, options: IRangeOptions): IRangeError {
  return createRangeErrorFromNormalizedOptions(variableName, normalizeRangeOptions(options));
}

export function createRangeErrorFromNormalizedOptions(
  variableName: string,
  options: IRangeOptionsNormalized,
): IRangeError {
  return new RangeError(createRangeErrorMessage(variableName, options));
}

export function createRangeErrorMessage(
  variableName: string,
  options: IRangeOptionsNormalized,
): string {
  return `'${variableName}' must be in the range ${options.minIncluded ? '[' : ']'}${options.min}, ${options.max}${options.maxIncluded ? ']' : '['}`;
}

/*-----*/

export function createGenericRangeError(options?: IGenericRangeErrorOptions): IRangeError {
  return new RangeError(createGenericRangeErrorMessage(options));
}

export function createGenericRangeErrorMessage(options?: IGenericRangeErrorOptions): string {
  return options === void 0
    ? 'Out of range'
    : (options as ICustomErrorMessageOptionalOptions).message === void 0
      ? createRangeErrorMessage(
          (options as IRangeOptionsWithVariableName).variableName,
          normalizeRangeOptions(options as IRangeOptionsWithVariableName),
        )
      : ((options as ICustomErrorMessageOptionalOptions).message as string);
}
