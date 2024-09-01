import { GenericFunction } from '../../types/generic-function.js';

export function isFunction<GFunction extends GenericFunction>(value: unknown): value is GFunction {
  return typeof value === 'function';
}
