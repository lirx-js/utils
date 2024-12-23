export interface FilterFunction<GValue> {
  (value: GValue): boolean;
}
