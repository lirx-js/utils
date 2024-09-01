import type { UndoFunction } from './undo-function.js';

export function mergeUndoFunctions(undoFunctions: readonly UndoFunction[]): UndoFunction {
  return (): void => {
    for (let i: number = 0; i < undoFunctions.length; i++) {
      undoFunctions[i]();
    }
  };
}
