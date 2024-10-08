import { createRangeErrorFromNormalizedOptions } from './create-range-error.js';
import { normalizeRangeOptions } from './normalize-range-options.js';
import { IRangeOptions, IRangeOptionsNormalized } from './range-error.type.js';

export function isNumberInRange(value: number, options: IRangeOptionsNormalized): boolean {
  return (
    (options.minIncluded ? options.min <= value : options.min < value) &&
    (options.maxIncluded ? value <= options.max : value < options.max)
  );
}

export function verifyNumberInRange(
  value: number,
  variableName: string,
  options: IRangeOptions
): void | never {
  verifyNumberInRangeNormalized(value, variableName, normalizeRangeOptions(options));
}

export function verifyNumberInRangeNormalized(
  value: number,
  variableName: string,
  options: IRangeOptionsNormalized
): void | never {
  if (!isNumberInRange(value, options)) {
    throw createRangeErrorFromNormalizedOptions(variableName, options);
  }
}
