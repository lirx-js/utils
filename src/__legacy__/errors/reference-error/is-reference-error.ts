import { IReferenceError } from './reference-error.type.js';

/**
 * @deprecated
 */
export function isReferenceError(value: unknown): value is IReferenceError {
  return value instanceof ReferenceError;
}
