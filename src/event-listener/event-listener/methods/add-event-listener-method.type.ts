import {
  IEventListenerEntry,
  InferEventListenerEntryGType,
} from '../types/entry/event-listener-entry.type';
import { InferEventListenerHandlerFromEventListenerEntryAndType } from '../types/event-listener-handler.type';

export interface IAddEventListenerMethod<GEntry extends IEventListenerEntry> {
  addEventListener<GType extends InferEventListenerEntryGType<GEntry>>(
    type: GType,
    listener: InferEventListenerHandlerFromEventListenerEntryAndType<GEntry, GType>,
    options?: boolean | AddEventListenerOptions,
  ): void;
}
