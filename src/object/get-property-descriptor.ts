import { InferObjectValueFromPropertyKey } from './infer-object-value-from-property-key.js';

const OBJECT_PROTOTYPE = Object.getPrototypeOf({});

export function getPropertyDescriptor<GObject extends object, GPropertyKey extends PropertyKey>(
  obj: GObject,
  propertyKey: GPropertyKey,
): TypedPropertyDescriptor<InferObjectValueFromPropertyKey<GObject, GPropertyKey>> | undefined {
  let descriptor:
    | TypedPropertyDescriptor<InferObjectValueFromPropertyKey<GObject, GPropertyKey>>
    | undefined;

  while (
    obj !== OBJECT_PROTOTYPE &&
    (descriptor = Object.getOwnPropertyDescriptor(obj, propertyKey)) === undefined
  ) {
    obj = Object.getPrototypeOf(obj);
  }

  return descriptor;
}
