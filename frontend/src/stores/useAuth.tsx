import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { AuthStore } from "@/types/Auth";

const useAuth = create<AuthStore>()(
  persist(
    (set, get) => ({
      token: null,
      expiry: null,
      user: null,
      isAuthenticated: () => {
        const { token, user, expiry } = get();
        return !(!token || !user || !expiry || new Date(expiry) < new Date());
      },
      setAuth: (user, token, expiry) =>
        set(() => ({
          user,
          token,
          expiry,
        })),
      setToken: (token, expiry) => set(() => ({ token, expiry })),
      clearAuth: () => set({ token: null, expiry: null, user: null }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
      version: 1,
    }
  )
);

export default useAuth;
