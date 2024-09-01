import { IRangeError } from './range-error.type.js';

/**
 * @deprecated
 */
export function isRangeError(value: unknown): value is IRangeError {
  return value instanceof RangeError;
}
