import { InferEventListenerFromGenericEventTarget } from './infer-normalized-event-target-from-generic-event-target.type';

export function genericEventTargetToTypedEventListener<GEventTarget>(
  target: GEventTarget,
): InferEventListenerFromGenericEventTarget<GEventTarget> {
  return target as any;
}
