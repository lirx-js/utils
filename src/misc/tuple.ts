export function tuple<GItems extends readonly any[]>(
  ...items: GItems
): GItems {
  return items;
}
