import { genericEventTargetToTypedEventListener } from '../event-map/generic-event-target-to-typed-event-listener';
import { InferEventListenerEntryFromGenericEventTarget } from '../event-map/infer-event-listener-entry-from-event-target.type';
import { InferEventListenerEntryGType } from '../types/entry/event-listener-entry.type';
import {
  IEventListenerHandlerOrNull,
  InferEventListenerHandlerFromEventListenerEntryAndType,
} from '../types/event-listener-handler.type';
import { createEventListener } from './create-event-listener';
import { IRemoveEventListener } from './remove-event-listener.type';

export function createEventListenerFromGenericEventTarget<
  GEventTarget,
  GType extends InferEventListenerEntryGType<
    InferEventListenerEntryFromGenericEventTarget<GEventTarget>
  >,
>(
  target: GEventTarget,
  type: GType,
  listener: InferEventListenerHandlerFromEventListenerEntryAndType<
    InferEventListenerEntryFromGenericEventTarget<GEventTarget>,
    GType
  >,
  options?: boolean | AddEventListenerOptions,
): IRemoveEventListener {
  return createEventListener(
    genericEventTargetToTypedEventListener(target),
    type,
    listener as IEventListenerHandlerOrNull,
    options,
  );
}
