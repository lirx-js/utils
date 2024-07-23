import { IEventListener, InferEventListenerGEntry } from '../event-listener.type';
import { InferEventListenerEntryGType } from '../types/entry/event-listener-entry.type';
import { InferEventListenerHandlerFromEventListenerEntryAndType } from '../types/event-listener-handler.type';

import { IRemoveEventListener } from './remove-event-listener.type';

export function createTypedEventListener<
  GTarget extends IEventListener,
  GType extends InferEventListenerEntryGType<InferEventListenerGEntry<GTarget>>,
>(
  target: GTarget,
  type: GType,
  listener: InferEventListenerHandlerFromEventListenerEntryAndType<
    InferEventListenerGEntry<GTarget>,
    GType
  >,
  options?: boolean | AddEventListenerOptions,
): IRemoveEventListener {
  target.addEventListener(type, listener, options);
  return (): void => {
    target.removeEventListener(type, listener, options);
  };
}
