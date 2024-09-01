export function convertUint8ArrayToBinaryString(input: Uint8Array): string {
  let str: string = '';
  for (let i: number = 0; i < input.length; i++) {
    str += String.fromCharCode(input[i]);
  }
  return str;
}
