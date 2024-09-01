export type PickMatching<T, V> = {
  [P in keyof T as T[P] extends V ? P : never]: T[P];
};
