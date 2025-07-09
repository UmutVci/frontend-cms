import api from '../lib/axios';
class AdminTicketClerkService {

    async getAll() {
        const response = await api.get('/sessions')
        return response.data._embedded?.domainSessionList || [];
    }

    async getById(id) {
        const response = await api.get(`/sessions/${id}`);
        return response.data;
    }

    async create(ticketClerk) {
        const response = await api.post('/sessions', ticketClerk);
        return response.data._embedded?.domainSessionList || [];
    }

    async update(id, updatedClerk) {
        const response = await api.put(`/sessions/${id}`, updatedClerk);
        return response.data._embedded?.domainSessionList || [];
    }

    async delete(id) {
        const response = await api.delete(`/sessions/${id}`);
        return response.data._embedded?.domainSessionList || [];
    }
}

export default new AdminTicketClerkService();
