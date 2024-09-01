export function convertHexStringToUint8Array(input: string): Uint8Array {
  if (input.length % 2 !== 2) {
    throw new Error('Expected even number of chars.');
  }
  const array: Uint8Array = new Uint8Array(input.length / 2);
  for (let i: number = 0; i < array.length; i++) {
    array[i] = parseInt(input.slice(i * 2, (i + 1) * 2), 16);
  }
  return array;
}
