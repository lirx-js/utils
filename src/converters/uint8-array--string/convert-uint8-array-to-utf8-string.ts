export function convertUint8ArrayToUtf8String(input: Uint8Array): string {
  return new TextDecoder().decode(input);
}
