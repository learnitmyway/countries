export function replaceNullWithUndefined<T extends object>(obj: T) {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [k, nullToUndefined(v)]),
  );
}

function nullToUndefined<T>(value: T | null) {
  if (value === null) {
    return;
  }
  return value;
}
