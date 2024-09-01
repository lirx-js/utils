import { CustomError, type CustomErrorOptions } from './custom-error.js';

export interface NetworkErrorOptions extends Omit<CustomErrorOptions, 'name'> {
  readonly status?: number | undefined;
}

export class NetworkError extends CustomError<'NetworkError'> {
  static fromRequest(request: Request): NetworkError {
    return new NetworkError({ message: `${request.method} '${request.url}'` });
  }

  static fromResponse(response: Response): NetworkError {
    return new NetworkError({
      message: `${response.status} '${response.url}'`,
      status: response.status,
    });
  }

  readonly status: number | undefined;

  constructor(options?: NetworkErrorOptions) {
    super({
      name: 'NetworkError',
      ...options,
    });
    this.status = options?.status;
  }
}
