/** TYPES **/
import { Writable } from '../../types/writable.js';

// ENTRY
export type ITypedMapEntry<GKey, GValue> = readonly [key: GKey, value: GValue];

export type IGenericTypedMapEntry = ITypedMapEntry<any, any>;

// KEYS AND VALUES
export type InferTypedMapKeys<GEntry extends IGenericTypedMapEntry> = GEntry[0];

export type InferTypedMapValues<GEntry extends IGenericTypedMapEntry> = GEntry[1];

// METHODS
export type InferTypedMapHasValueFromKey<
  GEntry extends IGenericTypedMapEntry,
  GKey,
> = GEntry extends readonly [GKey, any] ? true : false;

export type InferTypedMapValueFromKey<
  GEntry extends IGenericTypedMapEntry,
  GKey extends InferTypedMapKeys<GEntry>,
> = GEntry extends readonly [GKey, infer GValue] ? GValue : never;

/** CLASS **/

/**
 * @deprecated
 */
export class TypedMap<GEntry extends IGenericTypedMapEntry> {
  readonly #map: Map<unknown, unknown>;

  constructor(input: Iterable<GEntry>) {
    this.#map = input instanceof Map ? input : new Map<unknown, unknown>(input);
  }

  get size(): number {
    return this.#map.size;
  }

  has<GKey>(key: GKey): InferTypedMapHasValueFromKey<GEntry, GKey> {
    return this.#map.has(key) as InferTypedMapHasValueFromKey<GEntry, GKey>;
  }

  get<GKey extends InferTypedMapKeys<GEntry>>(key: GKey): InferTypedMapValueFromKey<GEntry, GKey> {
    const value: unknown | undefined = this.#map.get(key);

    if (value === void 0) {
      throw new Error(`Key "${key}" doesn't exist.`);
    } else {
      return value as any;
    }
  }

  set<GKey extends InferTypedMapKeys<GEntry>>(
    key: GKey,
    value: InferTypedMapValueFromKey<GEntry, GKey>,
  ): void {
    this.#map.set(key, value);
  }

  delete<GKey extends InferTypedMapKeys<GEntry>>(key: GKey): void {
    this.#map.delete(key);
  }

  clear(): void {
    this.#map.clear();
  }

  keys(): IterableIterator<InferTypedMapKeys<GEntry>> {
    return this.#map.keys() as IterableIterator<InferTypedMapKeys<GEntry>>;
  }

  values(): IterableIterator<InferTypedMapValues<GEntry>> {
    return this.#map.values() as IterableIterator<InferTypedMapValues<GEntry>>;
  }

  entries(): IterableIterator<Writable<GEntry>> {
    return this.#map.entries() as IterableIterator<Writable<GEntry>>;
  }

  [Symbol.iterator](): IterableIterator<Writable<GEntry>> {
    return this.entries();
  }
}

export class ReadonlyTypedMap<GEntry extends IGenericTypedMapEntry> extends TypedMap<GEntry> {
  constructor(input: Iterable<GEntry>) {
    super(input);
  }

  override set<GKey extends InferTypedMapKeys<GEntry>>(
    key: GKey,
    value: InferTypedMapValueFromKey<GEntry, GKey>,
  ): this {
    throw new Error(`Readonly`);
  }

  override delete<GKey extends InferTypedMapKeys<GEntry>>(key: GKey): void {
    throw new Error(`Readonly`);
  }

  override clear(): void {
    throw new Error(`Readonly`);
  }
}

/*---------------------*/

/*---------------------*/

// type A =
//   | ['A', string]
//   | ['b', boolean]
//   ;
//
// const a = new TypedMap<A>([
//   ['A', '0'],
//   ['b', true],
// ]);
//
// // const t: ('a' | 'b') extends 'a' ? true : false;
// const b = a.has('A');
// const _c = a.get;
//
// const c = a.get('A');
// const c = a.get('o');
// const d = a.set('A', 'ok');
// const e = a.keys();
