import { noop } from '../misc/noop.js';
import type { UndoFunction } from './undo-function.js';

export interface IsRunningFunction {
  (): boolean;
}

export interface FutureUndoContextFunction {
  (undo: UndoFunction, isRunning: IsRunningFunction): UndoFunction;
}

export function futureUndo(callback: FutureUndoContextFunction): UndoFunction {
  let undoResult: UndoFunction | undefined;

  let undoRef: UndoFunction = (): void => {
    undoRef = noop;

    if (undoResult !== void 0) {
      undoResult();
    }
  };

  const undo: UndoFunction = (): void => {
    undoRef();
  };

  const isRunning: IsRunningFunction = (): boolean => {
    return undoRef !== noop;
  };

  undoResult = callback(undo, isRunning);

  if (!isRunning()) {
    undo();
  }

  return undo;
}
