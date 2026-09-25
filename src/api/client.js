// Fetch wrapper

export async function request(path, options) {
  const { method, body, token } = options;
  let headers = {};
  if (body !== undefined) {
    headers["Content-Type"] = "application/json";
  }
  if (token) headers["Authorization"] = `Beaerer ${token}`;
  let res;
  try {
    res = await fetch(`${import.meta.env.VITE_BASE_URL}${path}`, {
      method,
      headers,
      body: body === undefined ? undefined : JSON.stringify(body),
    });
    if (!res.ok)
      throw new Error(`Request ${method} to ${import.meta.env.VITE_BASE_URL}${path} failed ${res.status}`);
  } catch (error) {
    throw error;
  }
  return res.json();
}
