import api from '../../lib/axios'; // axios değil api!

export const login = async ({ email, password }) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
}
