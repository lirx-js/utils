import { IEventTargetToEventMapUnion } from './event-target-to-event-map-union.type';
import { InferEventListenerEntryFromEventMap } from './infer-event-listener-entry-from-event-map.type';

export type InferEventListenerEntryFromGenericEventTarget<
  GEventTarget,
  GMap extends readonly [any, any] = IEventTargetToEventMapUnion,
> = GMap extends readonly [GEventTarget, infer GEventMap]
  ? InferEventListenerEntryFromEventMap<GEventMap>
  : never;
