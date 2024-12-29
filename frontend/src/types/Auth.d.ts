import { User } from "./User";

export interface AuthStore {
  user: User | null;
  token: string | null;
  expiry: string | null;
  setAuth: (
    user: User | null,
    token: string | null,
    expiry: string | null
  ) => void;
  setToken: (token: string | null, expiry: string | null) => void;
  clearAuth: () => void;
  isAuthenticated: () => boolean;
}
