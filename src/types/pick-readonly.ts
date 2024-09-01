import { IfEquals } from './if-equals.js';

export type PickReadonly<T> = {
  [P in keyof T as IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, never, P>]: T[P];
};
