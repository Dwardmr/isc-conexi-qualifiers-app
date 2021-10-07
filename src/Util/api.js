const URL = `https://isc-books-api.herokuapp.com/api`;

export const get = async (resource, hook) => {
  const response = await fetch(`${URL}${resource}`, { method: "GET" });
  if (response.ok) {
    const data = await response.json();
    hook(data);
  } else {
    console.error(response);
  }
  return null;
};

export const post = async (resource, payload, hook) => {
  const response = await fetch(`${URL}${resource}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload)
  });
  if (response.ok) {
    const data = await response.json();
    hook(data);
  } else {
    console.error(response);
  }
  return null;
};
