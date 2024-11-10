import { isNullish } from './is-nullish.js';

export function isAsyncDisposable(value: any): value is AsyncDisposable {
  return !isNullish(value) && Symbol.asyncDispose in value;
}
