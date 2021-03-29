import "whatwg-fetch";

export default async function fetchAsync(url) {
  const data = await (await fetch(url)).json();
  return data;
}
