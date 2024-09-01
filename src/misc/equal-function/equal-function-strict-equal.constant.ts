import { EqualFunction } from './equal-function.type.js';

export const EQUAL_FUNCTION_STRICT_EQUAL: EqualFunction<unknown> = (
  a: unknown,
  b: unknown,
): boolean => {
  return a === b;
};
