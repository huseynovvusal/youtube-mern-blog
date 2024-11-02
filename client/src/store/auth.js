import { create } from "zustand"

const useAuth = create((set) => ({
  user: JSON.parse(localStorage.getItem("user") || "null") || null,
  setUser: (newUser) => set((state) => ({ user: newUser })),
}))

export default useAuth
