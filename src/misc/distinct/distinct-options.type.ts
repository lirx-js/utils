import { IEqualFunction } from '../equal-function/equal-function.type';

export interface IDistinctInitialValueOptions<GValue> {
  initialValue?: GValue;
}

export interface IDistinctEqualFunctionOptions<GValue> {
  equal?: IEqualFunction<GValue>;
}


export interface IDistinctOptions<GValue> extends IDistinctInitialValueOptions<GValue>, IDistinctEqualFunctionOptions<GValue> {
}
