import { noop } from '../misc/noop.js';
import type { UndoFunction } from './undo-function.js';

export function undoOnce(undo: UndoFunction): UndoFunction {
  return (): void => {
    undo();
    undo = noop;
  };
}
