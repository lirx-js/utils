import { IGenericFunction } from '../../types/generic-function.type';

export function isFunction<GFunction extends IGenericFunction>(
  value: unknown,
): value is GFunction {
  return (typeof value === 'function');
}
