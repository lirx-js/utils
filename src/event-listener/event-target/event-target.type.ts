import { IEventDispatcher } from '../event-dispatcher/event-dispatcher.type';
import { IEventListener } from '../event-listener/event-listener.type';
import { IEventListenerEntry } from '../event-listener/types/entry/event-listener-entry.type';

export interface IEventTarget<GEntry extends IEventListenerEntry = IEventListenerEntry>
  extends IEventListener<GEntry>,
    IEventDispatcher {}
