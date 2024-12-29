import { User } from "@/types/User";

const API_URL = import.meta.env.VITE_API_ROUTE || "";

export type LoginData = {
  user: User | null;
  token: string | null;
  expiry: string | null;
};

export const login = async (
  username: string,
  password: string
): Promise<LoginData> => {
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
