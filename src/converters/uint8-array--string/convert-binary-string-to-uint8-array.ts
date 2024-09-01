export function convertBinaryStringToUint8Array(input: string): Uint8Array {
  const array: Uint8Array = new Uint8Array(input.length);
  for (let i: number = 0; i < input.length; i++) {
    array[i] = input.charCodeAt(i);
  }
  return array;
}
