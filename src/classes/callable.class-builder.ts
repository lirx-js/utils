import { IGenericFunction } from '../types/generic-function.type';
import { IGenericConstructor } from '../types/generic-constructor.type';
import { noop } from '../misc/noop';

/**
 * https://medium.com/@adrien.za/creating-callable-objects-in-javascript-fbf88db9904c
 */

export function Callable<GClass extends IGenericConstructor, GCallableClass extends IGenericConstructor>(
  _class: GClass,
  _fnc: IGenericFunction,
): GCallableClass {
  return (class extends _class {
    constructor(...args: any[]) {
      super(...args);

      const PROXY = new Proxy<GCallableClass>((noop) as any, {
        has: (_, propertyKey: PropertyKey): boolean => {
          return Reflect.has(this, propertyKey);
        },
        ownKeys: (): (string | symbol)[] => {
          return Reflect.ownKeys(this);
        },
        get: (_, propertyKey: PropertyKey): any => {
          const value = (this as any)[propertyKey];
          // const value: any = Reflect.get(this, propertyKey);
          return (typeof value === 'function')
            ? value.bind(this)
            : value;
        },
        set: (_, propertyKey: PropertyKey, value: any): boolean => {
          return Reflect.set(
            this,
            propertyKey,
            value,
          );
        },
        apply: (_0, _1, argArray: any[]): any => {
          return _fnc.apply(this, argArray);
        },
      });

      this.__PROXY__ = PROXY;

      return PROXY;
    }
  }) as any;
}


export function getCallableInstanceThis(
  instance: any,
): unknown {
  if ('__PROXY__' in instance) {
    return instance.__PROXY__;
  } else {
    // throw new Error(`Not a Callable instance`);
    return instance;
  }
}
