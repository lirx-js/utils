export type DeepWritable<T> = T extends object | readonly any[]
  ? {
    -readonly [P in keyof T]: DeepWritable<T[P]>;
  }
  : T;
