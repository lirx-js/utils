import { IEventListenerEntry } from '../types/entry/event-listener-entry.type';

export type InferEventListenerEntryFromEventMap<GEventMap> = {
  [GType in keyof GEventMap]: GType extends string
    ? GEventMap[GType] extends Event
      ? IEventListenerEntry<GType, GEventMap[GType]>
      : never
    : never;
}[keyof GEventMap];
