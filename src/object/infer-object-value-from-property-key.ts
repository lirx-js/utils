export type InferObjectValueFromPropertyKey<
  GObject extends object,
  GPropertyKey extends PropertyKey,
> = GPropertyKey extends keyof GObject ? GObject[GPropertyKey] : unknown;
