import { create } from 'zustand'

const useAuth = create((set) => ({
    user: null,
    role: null,
    setUser: (user) => set({ user }),
    setRole: (role) => set({ role }),
    logout: () => set({ user: null, role: null }),
}))

export default useAuth
