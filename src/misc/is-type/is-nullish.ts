export type Nullish = null | undefined;

export function isNullish(value: any): value is Nullish {
  return value === null || value === void 0;
}

export type Nullable<GValue> = GValue | Nullish;
