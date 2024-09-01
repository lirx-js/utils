import { isError } from '../is-error.js';
import { ICustomError } from './custom-error.type.js';

/**
 * @deprecated
 */
export function isCustomError<GName extends string, GProperties>(
  value: unknown,
  name: GName,
): value is ICustomError<GName, GProperties> {
  return isError(value) && value.name === name;
}
