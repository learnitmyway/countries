import { NotFoundError } from "./NotFoundError";

export const get = async <T>({ url }: { url: string }): Promise<T> => {
  return request({ url, method: "GET" });
};

async function request<T>({
  url,
  method,
}: {
  url: string;
  method: string;
}): Promise<T> {
  const response: Response = await fetch(url, { method });

  if (!response.ok) {
    const { status, statusText } = response;
    if (status === 404) throw new NotFoundError(statusText);
    throw new Error(`${status} ${statusText}`);
  }

  return (await response.json()) as T;
}
