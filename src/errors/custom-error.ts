export interface CustomErrorOptions<GName extends string = string> extends Readonly<ErrorOptions> {
  readonly name: GName;
  readonly message?: string;
}

export type CustomErrorOptionsForChild = Omit<CustomErrorOptions<string>, 'name'>;

export class CustomError<GName extends string = string> extends Error {
  readonly name: GName;

  constructor({ name, message, ...options }: CustomErrorOptions<GName>) {
    super(message, options);
    this.name = name;
  }
}
