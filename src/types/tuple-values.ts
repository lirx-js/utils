export type TupleValues<GTuple, GKey> = GTuple[Extract<keyof GTuple, GKey>];
