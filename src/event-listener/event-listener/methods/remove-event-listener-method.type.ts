import {
  IEventListenerEntry,
  InferEventListenerEntryGType,
} from '../types/entry/event-listener-entry.type';
import { InferEventListenerHandlerFromEventListenerEntryAndType } from '../types/event-listener-handler.type';

export interface IRemoveEventListenerMethod<GEntry extends IEventListenerEntry> {
  removeEventListener<GType extends InferEventListenerEntryGType<GEntry>>(
    type: GType,
    listener: InferEventListenerHandlerFromEventListenerEntryAndType<GEntry, GType>,
    options?: boolean | EventListenerOptions,
  ): void;
}
