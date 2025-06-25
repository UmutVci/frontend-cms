import { create } from 'zustand'
import {login} from "../services/authService";

const useAuth = create((set) => ({
    user: null,
    role: null,
    error: null,

    loginUser: async (credentials) => {
        try {
            const data = await login(credentials)
            set({ user: data.user, role: data.role, error: null })
            return true
        } catch (err) {
            set({ error: err.response?.data?.message || 'Login failed' })
            return false
        }
    },

    logout: () => set({ user: null, role: null }),
}))

export default useAuth