export interface MapFunction<GIn, GOut> {
  (value: GIn): GOut;
}
