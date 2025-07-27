import api from '../lib/axios';

class MovieService {

    async getAll() {
        const response = await api.get('/movies');
        return response.data._embedded?.domainMovieList || [];
    }

    async getById(id) {
        const response = await api.get(`/movies/${id}`);
        return response.data;
    }

    async create(movie) {
        try {
            const response = await api.post('/movies', movie);
            return response.status === 201 || response.status === 200;
        } catch (error) {
            console.error("Film oluşturulurken hata:", error);
            return false;
        }
    }

    async update(id, updatedMovie) {
        try {
            const response = await api.put(`/movies/${id}`, updatedMovie);
            return response.status === 200 || response.status === 204;
        } catch (error) {
            console.error("Update error:", error.response?.data || error.message);
            return false;
        }
    }

    async delete(id) {
        try {
            const response = await api.delete(`/movies/${id}`);
            return response.status === 204;
        } catch (error) {
            console.error("Film silinemedi:", error);
        }
    }
}

export default new MovieService();
