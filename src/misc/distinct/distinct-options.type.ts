import { EqualFunction } from '../equal-function/equal-function.type.js';

export interface DistinctInitialValueOptions<GValue> {
  readonly initialValue?: GValue;
}

export interface DistinctEqualFunctionOptions<GValue> {
  readonly equal?: EqualFunction<GValue>;
}

export interface DistinctOptions<GValue>
  extends DistinctInitialValueOptions<GValue>,
    DistinctEqualFunctionOptions<GValue> {}
