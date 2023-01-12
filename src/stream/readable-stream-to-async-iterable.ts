export async function* readableStreamToAsyncIterable<GValue>(
  readableStream: ReadableStream<GValue>,
): AsyncGenerator<GValue> {
  const reader: ReadableStreamDefaultReader<GValue> = readableStream.getReader();
  try {
    let result: ReadableStreamReadResult<GValue>;
    while (!(result = await reader.read()).done) {
      yield result.value;
    }
  } finally {
    reader.releaseLock();
  }
}
