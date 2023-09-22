export function joinList({ list }: { list?: string[] }) {
  return list?.join(", ") ?? "";
}
