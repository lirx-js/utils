export const DISCARD_TOKEN = Symbol('DISCARD_TOKEN');

export type DiscardToken = typeof DISCARD_TOKEN;

export interface MapFilterFunction<GIn, GOut> {
  (value: GIn): GOut | DiscardToken;
}
