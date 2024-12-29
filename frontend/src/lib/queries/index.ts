const API_URL = import.meta.env.VITE_API_ROUTE || "";

export const login = async (username: string, password: string) => {
  const response = await fetch(`${API_URL}/login/`, {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data;
};
