export type PickNotMatching<T, V> = {
  [P in keyof T as T[P] extends V ? never : P]: T[P];
};
