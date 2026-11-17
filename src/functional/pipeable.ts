import { pipe } from './pipe.js';
import { UnaryFunction } from './unary-function.js';

export class Pipeable {
  pipe(): this;
  pipe<A>(pipe1: UnaryFunction<this, A>): A;
  pipe<A, B>(pipe1: UnaryFunction<this, A>, pipe2: UnaryFunction<A, B>): B;
  pipe<A, B, C>(
    pipe1: UnaryFunction<this, A>,
    pipe2: UnaryFunction<A, B>,
    pipe3: UnaryFunction<B, C>,
  ): C;
  pipe<A, B, C, D>(
    pipe1: UnaryFunction<this, A>,
    pipe2: UnaryFunction<A, B>,
    pipe3: UnaryFunction<B, C>,
    pipe4: UnaryFunction<C, D>,
  ): D;
  pipe<A, B, C, D, E>(
    pipe1: UnaryFunction<this, A>,
    pipe2: UnaryFunction<A, B>,
    pipe3: UnaryFunction<B, C>,
    pipe4: UnaryFunction<C, D>,
    pipe5: UnaryFunction<D, E>,
  ): E;
  pipe<A, B, C, D, E, F>(
    pipe1: UnaryFunction<this, A>,
    pipe2: UnaryFunction<A, B>,
    pipe3: UnaryFunction<B, C>,
    pipe4: UnaryFunction<C, D>,
    pipe5: UnaryFunction<D, E>,
    pipe6: UnaryFunction<E, F>,
  ): F;
  pipe<A, B, C, D, E, F, G>(
    pipe1: UnaryFunction<this, A>,
    pipe2: UnaryFunction<A, B>,
    pipe3: UnaryFunction<B, C>,
    pipe4: UnaryFunction<C, D>,
    pipe5: UnaryFunction<D, E>,
    pipe6: UnaryFunction<E, F>,
    pipe7: UnaryFunction<F, G>,
  ): G;
  pipe<A, B, C, D, E, F, G, H>(
    pipe1: UnaryFunction<this, A>,
    pipe2: UnaryFunction<A, B>,
    pipe3: UnaryFunction<B, C>,
    pipe4: UnaryFunction<C, D>,
    pipe5: UnaryFunction<D, E>,
    pipe6: UnaryFunction<E, F>,
    pipe7: UnaryFunction<F, G>,
    pipe8: UnaryFunction<G, H>,
  ): H;
  pipe<A, B, C, D, E, F, G, H, I>(
    pipe1: UnaryFunction<this, A>,
    pipe2: UnaryFunction<A, B>,
    pipe3: UnaryFunction<B, C>,
    pipe4: UnaryFunction<C, D>,
    pipe5: UnaryFunction<D, E>,
    pipe6: UnaryFunction<E, F>,
    pipe7: UnaryFunction<F, G>,
    pipe8: UnaryFunction<G, H>,
    pipe9: UnaryFunction<H, I>,
  ): I;
  pipe<A, B, C, D, E, F, G, H, I>(
    pipe1: UnaryFunction<this, A>,
    pipe2: UnaryFunction<A, B>,
    pipe3: UnaryFunction<B, C>,
    pipe4: UnaryFunction<C, D>,
    pipe5: UnaryFunction<D, E>,
    pipe6: UnaryFunction<E, F>,
    pipe7: UnaryFunction<F, G>,
    pipe8: UnaryFunction<G, H>,
    pipe9: UnaryFunction<H, I>,
    ...operations: UnaryFunction<any, any>[]
  ): unknown;
  pipe(...pipes: UnaryFunction<any, any>[]): any {
    return pipes.reduce((fnc: any, pipe: UnaryFunction<any, any>) => pipe(fnc), this);
  }
}
