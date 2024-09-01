import { isNullish } from './is-nullish.js';

export function isIterable<GValue>(value: any): value is Iterable<GValue> {
  return !isNullish(value) && Symbol.iterator in value;
}
