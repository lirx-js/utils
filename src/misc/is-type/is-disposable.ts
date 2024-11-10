import { isNullish } from './is-nullish.js';

export function isDisposable(value: any): value is Disposable {
  return !isNullish(value) && Symbol.dispose in value;
}
