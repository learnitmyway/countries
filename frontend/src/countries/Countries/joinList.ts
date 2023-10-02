export function joinList({ list }: { list?: string[] | null }) {
  return list?.join(", ") ?? "";
}
