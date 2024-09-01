export type DeepReadonly<T> = T extends object | readonly any[]
  ? {
    readonly [P in keyof T]: DeepReadonly<T[P]>;
  }
  : T;
