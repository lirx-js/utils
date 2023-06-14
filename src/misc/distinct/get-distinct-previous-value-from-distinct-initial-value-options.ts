import { IUninitializedToken, UNINITIALIZED_TOKEN } from '../tokens/uninitialized.token';
import { IDistinctInitialValueOptions } from './distinct-options.type';


export function getDistinctPreviousValueFromDistinctInitialValueOptions<GValue>(
  options: IDistinctInitialValueOptions<GValue>,
): GValue | IUninitializedToken {
  return ('initialValue' in options)
    ? options.initialValue!
    : UNINITIALIZED_TOKEN;
}
