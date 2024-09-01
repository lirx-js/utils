export function convertUtf8StringToUint8Array(input: string): Uint8Array {
  return new TextEncoder().encode(input);
}
