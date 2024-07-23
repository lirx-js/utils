import { IAddEventListenerMethod } from './methods/add-event-listener-method.type';
import { IRemoveEventListenerMethod } from './methods/remove-event-listener-method.type';
import { IEventListenerEntry } from './types/entry/event-listener-entry.type';

export interface IEventListener<GEntry extends IEventListenerEntry = IEventListenerEntry>
  extends IAddEventListenerMethod<GEntry>,
    IRemoveEventListenerMethod<GEntry> {}

export type InferEventListenerGEntry<GReadonlyEventTarget> =
  GReadonlyEventTarget extends IEventListener<infer GEntry> ? GEntry : never;
