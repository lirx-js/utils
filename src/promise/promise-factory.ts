import { PromiseOrValue } from './promise-or-value.js';

export interface PromiseFactory<GValue> {
  (signal?: AbortSignal): PromiseOrValue<GValue>;
}
