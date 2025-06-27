import api from "../lib/axios";

class HallService {

    async getAll() {
        const response = await api.get('/halls')
        return response.data._embedded?.domainHallList || [];
    }

    async getById(id) {
        const response = await api.get(`/halls/${id}`);
        return response.data._embedded?.domainHallList || [];
    }

    async create(ticketClerk) {
        const response = await api.post('/halls', ticketClerk);
        return response.data._embedded?.domainHallList || [];
    }

    async update(id, updatedClerk) {
        const response = await api.put(`/halls/${id}`, updatedClerk);
        return response.data._embedded?.domainHallList || [];
    }

    async delete(id) {
        const response = await api.delete(`/halls/${id}`);
        return response.data._embedded?.domainHallList || [];
    }
}

export default new HallService();
