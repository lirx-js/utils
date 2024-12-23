export interface ScanFunction<GIn, GOut> {
  (cumulativeValue: GOut, value: GIn): GOut;
}
