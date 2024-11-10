import { UnaryFunction } from './unary-function.js';

export function pipe<A>(input: A): A;
export function pipe<A, B>(input: A, fnc1: UnaryFunction<A, B>): B;
export function pipe<A, B, C>(input: A, fnc1: UnaryFunction<A, B>, fnc2: UnaryFunction<B, C>): C;
export function pipe<A, B, C, D>(
  input: A,
  fnc1: UnaryFunction<A, B>,
  fnc2: UnaryFunction<B, C>,
  fnc3: UnaryFunction<C, D>,
): D;
export function pipe<A, B, C, D, E>(
  input: A,
  fnc1: UnaryFunction<A, B>,
  fnc2: UnaryFunction<B, C>,
  fnc3: UnaryFunction<C, D>,
  fnc4: UnaryFunction<D, E>,
): E;
export function pipe<A, B, C, D, E, F>(
  input: A,
  fnc1: UnaryFunction<A, B>,
  fnc2: UnaryFunction<B, C>,
  fnc3: UnaryFunction<C, D>,
  fnc4: UnaryFunction<D, E>,
  fnc5: UnaryFunction<E, F>,
): F;
export function pipe<A, B, C, D, E, F, G>(
  input: A,
  fnc1: UnaryFunction<A, B>,
  fnc2: UnaryFunction<B, C>,
  fnc3: UnaryFunction<C, D>,
  fnc4: UnaryFunction<D, E>,
  fnc5: UnaryFunction<E, F>,
  fnc6: UnaryFunction<F, G>,
): G;
export function pipe<A, B, C, D, E, F, G, H>(
  input: A,
  fnc1: UnaryFunction<A, B>,
  fnc2: UnaryFunction<B, C>,
  fnc3: UnaryFunction<C, D>,
  fnc4: UnaryFunction<D, E>,
  fnc5: UnaryFunction<E, F>,
  fnc6: UnaryFunction<F, G>,
  fnc7: UnaryFunction<G, H>,
): H;
export function pipe<A, B, C, D, E, F, G, H, I>(
  input: A,
  fnc1: UnaryFunction<A, B>,
  fnc2: UnaryFunction<B, C>,
  fnc3: UnaryFunction<C, D>,
  fnc4: UnaryFunction<D, E>,
  fnc5: UnaryFunction<E, F>,
  fnc6: UnaryFunction<F, G>,
  fnc7: UnaryFunction<G, H>,
  fnc8: UnaryFunction<H, I>,
): I;
export function pipe<A, B, C, D, E, F, G, H, I>(
  input: A,
  fnc1: UnaryFunction<A, B>,
  fnc2: UnaryFunction<B, C>,
  fnc3: UnaryFunction<C, D>,
  fnc4: UnaryFunction<D, E>,
  fnc5: UnaryFunction<E, F>,
  fnc6: UnaryFunction<F, G>,
  fnc7: UnaryFunction<G, H>,
  fnc8: UnaryFunction<H, I>,
  ...operations: UnaryFunction<any, any>[]
): unknown;
export function pipe(input: any, ...fncs: UnaryFunction<any, any>[]): any {
  return fncs.reduce((observable: any, pipe: UnaryFunction<any, any>) => pipe(observable), input);
}
