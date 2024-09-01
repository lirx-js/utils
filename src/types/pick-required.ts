export type PickRequired<T> = {
  [P in keyof T as T extends Record<P, T[P]> ? P : never]: T[P];
};
