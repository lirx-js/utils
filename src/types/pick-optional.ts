export type PickOptional<T> = {
  [P in keyof T as T extends Record<P, T[P]> ? never : P]: T[P];
};
