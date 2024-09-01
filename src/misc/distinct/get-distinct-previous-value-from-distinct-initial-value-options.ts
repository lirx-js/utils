import { UNINITIALIZED_TOKEN, UninitializedToken } from '../tokens/uninitialized.token.js';
import { DistinctInitialValueOptions } from './distinct-options.type.js';

export function getDistinctPreviousValueFromDistinctInitialValueOptions<GValue>(
  options: DistinctInitialValueOptions<GValue>,
): GValue | UninitializedToken {
  return 'initialValue' in options ? options.initialValue! : UNINITIALIZED_TOKEN;
}
