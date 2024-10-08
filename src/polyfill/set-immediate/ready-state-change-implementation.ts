import { IRegisterImmediate } from './register-immediate.type.js';
import { runTask } from './run-task.js';

/** READY STATE CHANGE **/

export function readyStateChangeImplementation(doc: Document): IRegisterImmediate {
  const html: HTMLElement = doc.documentElement;
  return (handle: number) => {
    let script: HTMLScriptElement = doc.createElement('script');
    (script as any)['onreadystatechange'] = () => {
      runTask(handle);
      (script as any)['onreadystatechange'] = null;
      html.removeChild(script);
    };
    html.appendChild(script);
  };
}
