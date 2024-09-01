export function convertUint8ArrayToHexString(input: Uint8Array): string {
  let str: string = '';
  for (let i: number = 0; i < input.length; i++) {
    str += input[i].toString(16).padStart(2, '0');
  }
  return str;
}
