export function joinCapitals({ capitals }: { capitals?: string[] }) {
  return capitals?.join(", ") ?? "";
}
