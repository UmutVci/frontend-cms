import api from '../lib/axios';
class AdminTicketClerkService {

    async getAll() {
        const response = await api.get('/movies')
        return response.data._embedded?.domainMovieList || [];
    }

    async getById(id) {
        const response = await api.get(`/movies/${id}`);
        return response.data;
    }

    async create(ticketClerk) {
        const response = await api.post('/movies', ticketClerk);
        return response.data._embedded?.domainMovieList || [];
    }

    async update(id, updatedClerk) {
        const response = await api.put(`/movies/${id}`, updatedClerk);
        return response.data._embedded?.domainMovieList || [];
    }

    async delete(id) {
        const response = await api.delete(`/movies/${id}`);
        return response.data._embedded?.domainMovieList || [];
    }
}

export default new AdminTicketClerkService();
