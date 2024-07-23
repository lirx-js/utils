import { IEventListenerEntry } from './entry/event-listener-entry.type';

export interface IEventListenerFunction<GEvent extends Event> {
  (event: GEvent): void;
}

export interface IEventListenerObject<GEvent extends Event> {
  handleEvent(event: GEvent): void;
}

export type IEventListenerHandler<GEvent extends Event> =
  | IEventListenerFunction<GEvent>
  | IEventListenerObject<GEvent>;

export type IEventListenerHandlerOrNull<GEvent extends Event = Event> =
  IEventListenerHandler<GEvent> | null;

/* INFER */

export type InferEventListenerHandlerFromEventListenerEntryAndType<
  GEntry extends IEventListenerEntry,
  GType extends string,
> = GEntry extends readonly [GType, infer GEvent]
  ? GEvent extends Event
    ? IEventListenerHandlerOrNull<GEvent>
    : never
  : never;

// export type InferLooseEventListenerFromEventListenerEntryAndType<
//   GEntry extends IEventListenerEntry,
//   GType extends string,
// > =
//   InferEventListenerFromEventListenerEntryAndType<GEntry, GType> extends never
//     ? IEventListenerOrNull<Event>
//     : InferEventListenerFromEventListenerEntryAndType<GEntry, GType>;
