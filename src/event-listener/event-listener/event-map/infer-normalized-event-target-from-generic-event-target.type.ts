import { IEventListener } from '../event-listener.type';
import { InferEventListenerEntryFromGenericEventTarget } from './infer-event-listener-entry-from-event-target.type';

export type InferEventListenerFromGenericEventTarget<GEventTarget> = IEventListener<
  InferEventListenerEntryFromGenericEventTarget<GEventTarget>
>;
