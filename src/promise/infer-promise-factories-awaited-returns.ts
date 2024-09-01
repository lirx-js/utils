import { GenericFunction } from '../types/generic-function.js';
import { InferPromiseFactoryAwaitedReturn } from './infer-promise-factory-awaited-return.js';

export type InferPromiseFactoriesAwaitedReturns<
  GFactories extends readonly GenericFunction[] | [],
> = { -readonly [GKey in keyof GFactories]: InferPromiseFactoryAwaitedReturn<GFactories[GKey]> };
