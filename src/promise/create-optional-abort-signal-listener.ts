import { noop } from '../misc/noop.js';
import { UndoFunction } from '../undo/undo-function.js';

export function createOptionalAbortSignalListener(
  signal: AbortSignal | undefined,
  listener: (reason: unknown) => void,
): UndoFunction {
  if (signal === undefined) {
    return noop;
  } else {
    const end = (): void => {
      signal.removeEventListener('abort', onAbort);
    };

    const onAbort = (): void => {
      end();
      listener(signal.reason);
    };

    signal.addEventListener('abort', onAbort);

    return end;
  }
}
