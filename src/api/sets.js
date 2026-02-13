const API = import.meta.env.VITE_API;

/**Sends a new set to API to be created (Token is required)*/
export async function createSet(token, set) {
  const response = await fetch(API + "/sets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(set),
  });

  if (!response.ok) {
    const result = await response.json();
    throw Error(result.message);
  }
}

/**Requests API to delete the set with the given ID (Token is required)*/
export async function deleteSet(token, id) {
  const response = await fetch(API + "/sets/" + id, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token },
  });

  if (!response.ok) {
    const result = await response.json();
    throw Error(result.message);
  }
}
