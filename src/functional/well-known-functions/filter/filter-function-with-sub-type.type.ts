export interface FilterFunctionWithSubType<GIn, GOut extends GIn> {
  (value: GIn): value is GOut;
}
