import { IRegisterImmediate } from './register-immediate.type.js';
import { runTask } from './run-task.js';

/** POST MESSAGE **/

export function postMessageImplementation(global: any): IRegisterImmediate {
  const messagePrefix: string = `setImmediate$${Math.random()}$`;
  const length: number = messagePrefix.length;
  global.addEventListener(
    'message',
    (event: MessageEvent) => {
      if (
        event.source === global &&
        typeof event.data === 'string' &&
        event.data.indexOf(messagePrefix) === 0
      ) {
        runTask(+event.data.slice(length));
      }
    },
    false
  );

  return (handle: number) => {
    global.postMessage(messagePrefix + handle, '*');
  };
}
