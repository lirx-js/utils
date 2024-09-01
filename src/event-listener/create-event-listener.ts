import type { UndoFunction } from '../undo/undo-function.js';

export function createEventListener<GEvent extends Event>(
  target: Omit<EventTarget, 'dispatchEvent'>,
  type: string,
  listener: (event: GEvent) => void | null,
  options?: boolean | AddEventListenerOptions,
): UndoFunction {
  target.addEventListener(type, listener as EventListener, options);
  return (): void => {
    target.removeEventListener(type, listener as EventListener, options);
  };
}
