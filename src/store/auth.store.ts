import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { EUserRole } from "../models/user.type";

interface IUser {
  fullName: string;
  email: string;
  role: EUserRole;
  vendorId: string;
}

interface IAuthStore {
  token: string;
  user: IUser | null;
  setToken: (token: string) => void;
  setUser: (user: IUser) => void;
}

export const authStore = create<IAuthStore>()(
  persist(
    (set) => ({
      token: "",
      user: null,
      setToken: (token) => set({ token }),
      setUser: (user) => set({ user }),
    }),
    {
      name: "auth",
    }
  )
);
