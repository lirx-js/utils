import { IfEquals } from './if-equals.js';

export type PickWritable<T> = {
  [P in keyof T as IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, P, never>]: T[P];
};
