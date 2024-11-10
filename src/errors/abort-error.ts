import { CustomError, type CustomErrorOptionsForChild } from './custom-error.js';

export interface AbortErrorOptions extends CustomErrorOptionsForChild {
  readonly signal?: AbortSignal;
}

export class AbortError extends CustomError<'AbortError'> {
  readonly signal: AbortSignal | undefined;

  constructor(options?: AbortErrorOptions) {
    super({
      name: 'AbortError',
      message: typeof options?.signal?.reason === 'string' ? options!.signal!.reason : undefined,
      ...options,
    });
    this.signal = options?.signal;
  }
}
