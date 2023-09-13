export const fetchWrapper = async <T>({ url }: { url: string }): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not OK");
  }
  return (await response.json()) as T;
};
