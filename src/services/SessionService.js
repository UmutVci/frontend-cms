import api from "../lib/axios";

class SessionService {

    async getAll() {
        const response = await api.get('/sessions')
        console.log('Veri:', response.data._embedded?.domainHallList);
        console.log(Array.isArray(response));
        return response.data._embedded?.domainSessionsList || [];
    }

    async getById(id) {
        const response = await api.get(`/sessions/${id}`);
        return response.data._embedded?.domainSessionsList || [];
    }

    async create(ticketClerk) {
        const response = await api.post('/sessions', ticketClerk);
        return response.data._embedded?.domainSessionsList || [];
    }

    async update(id, updatedClerk) {
        const response = await api.put(`/sessions/${id}`, updatedClerk);
        return response.data._embedded?.domainSessionsList || [];
    }

    async delete(id) {
        const response = await api.delete(`/sessions/${id}`);
        return response.data._embedded?.domainSessionsList || [];
    }
}

export default new SessionService();
