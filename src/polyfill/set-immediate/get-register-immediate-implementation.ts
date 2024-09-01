import { messageChannelImplementation } from './message-channel-implementation.js';
import { nextTickImplementation } from './next-tick-implementation.js';
import { postMessageImplementation } from './post-message-implementation.js';
import { readyStateChangeImplementation } from './ready-state-change-implementation.js';
import { IRegisterImmediate } from './register-immediate.type.js';
import { setTimeoutImplementation } from './set-timeout-implementation.js';

function canUsePostMessage(global: any): boolean {
  // The test against `importScripts` prevents this implementation from being installed inside a web worker,
  // where `global.postMessage` means something completely different and can't be used for this purpose.
  if (global.postMessage && !global.importScripts) {
    let postMessageIsAsynchronous: boolean = true;
    let oldOnMessage = global.onmessage;
    global.onmessage = () => {
      postMessageIsAsynchronous = false;
    };
    global.postMessage('', '*');
    global.onmessage = oldOnMessage;
    return postMessageIsAsynchronous;
  } else {
    return false;
  }
}

export function getRegisterImmediateImplementation(global: any): IRegisterImmediate {
  if ({}.toString.call(global.process) === '[object process]') {
    return nextTickImplementation(global.process);
  } else if (canUsePostMessage(global)) {
    return postMessageImplementation(global);
  } else if (global.MessageChannel) {
    return messageChannelImplementation();
  } else if (global.document && 'onreadystatechange' in global.document.createElement('script')) {
    return readyStateChangeImplementation(global);
  } else {
    return setTimeoutImplementation();
  }
}
