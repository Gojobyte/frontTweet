const API_URL = import.meta.env.VITE_API_URL || "https://backtweet.onrender.com/api/tweets";

export const getTweets = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const getTweetsByUser = async (userId) => {
  const res = await fetch(`${API_URL}/user/${userId}`);
  if (!res.ok) throw new Error("Erreur lors du chargement des tweets de l'utilisateur");
  return await res.json();
};

export const createTweet = async (tweet) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tweet),
  });
  return await res.json();
};

export const deleteTweet = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};

export const updateTweet = async (id, tweet) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tweet),
  });
  return await res.json();
};