import { create } from 'zustand'
import { login } from './authService';

const useAuth = create((set) => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    role: localStorage.getItem('role') || null,
    token: localStorage.getItem('token') || null,
    error: null,

    setUser: (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        set({ user });
    },

    setRole: (role) => {
        localStorage.setItem('role', role);
        set({ role });
    },

    setToken: (token) => {
        localStorage.setItem('token', token);
        set({ token });
    },

    loginUser: async (credentials) => {
        try {
            const data = await login(credentials); // { token, email, role }
            set({ error: null });
            const user = { name: data.email };
            useAuth.getState().setUser(user);
            useAuth.getState().setRole(data.role);
            useAuth.getState().setToken(data.token);
            return true;
        } catch (err) {
            set({ error: err.response?.data || 'Login failed' });
            return false;
        }
    },

    logout: () => {
        localStorage.removeItem('user');
        localStorage.removeItem('role');
        localStorage.removeItem('token');
        set({ user: null, role: null, token: null });
    },
}));

export default useAuth;
