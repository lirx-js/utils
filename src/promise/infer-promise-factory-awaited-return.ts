import { GenericFunction } from '../types/generic-function.js';

export type InferPromiseFactoryAwaitedReturn<GFactory extends GenericFunction> = Awaited<
  ReturnType<GFactory>
>;
