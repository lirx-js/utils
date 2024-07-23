export type IEventListenerEntry<
  GType extends string = string,
  GEvent extends Event = Event,
> = readonly [type: GType, event: GEvent];

/* INFER */

export type InferEventListenerEntryGType<GEntry extends IEventListenerEntry> =
  GEntry extends readonly [infer GType, any] ? GType : never;

export type InferEventListenerEntryGEventFromType<
  GEntry extends IEventListenerEntry,
  GType extends string,
> = GEntry extends readonly [GType, infer GEvent] ? (GEvent extends Event ? GEvent : never) : never;
