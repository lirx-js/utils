import { IReferenceError, IReferenceErrorOptions } from './reference-error.type.js';

/**
 * @deprecated
 */
export function createReferenceError(options?: IReferenceErrorOptions): IReferenceError {
  return new ReferenceError(options?.message ?? 'Undefined variable');
}
