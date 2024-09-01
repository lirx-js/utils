import { PickNotMatching } from './pick-not-matching.js';

export type PickNonMethods<T> = PickNotMatching<T, (...args: any[]) => any>;
