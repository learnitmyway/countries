import { NotFoundError } from "./NotFoundError";

export const fetchJson = async <T>({ url }: { url: string }): Promise<T> => {
  const response: Response = await fetch(url);

  if (!response.ok) {
    const { status, statusText } = response;
    if (status === 404) throw new NotFoundError(statusText);
    throw new Error(`${status} ${statusText}`);
  }

  return (await response.json()) as T;
};
