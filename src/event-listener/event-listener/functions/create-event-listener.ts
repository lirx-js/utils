import { IEventListener } from '../event-listener.type';
import { IEventListenerHandlerOrNull } from '../types/event-listener-handler.type';
import { IRemoveEventListener } from './remove-event-listener.type';

export function createEventListener(
  target: IEventListener,
  type: string,
  listener: IEventListenerHandlerOrNull,
  options?: boolean | AddEventListenerOptions,
): IRemoveEventListener {
  target.addEventListener(type, listener, options);
  return (): void => {
    target.removeEventListener(type, listener, options);
  };
}
