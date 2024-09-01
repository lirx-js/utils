import { PromiseOrValue } from './promise-or-value.js';

export interface AbortablePromiseFactory<GValue> {
  (signal: AbortSignal): PromiseOrValue<GValue>;
}
