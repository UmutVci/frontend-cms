import api from '../lib/axios';
class TicketClerkService {

    async getAll() {
        const response = await api.get('/ticket-clerks')
        return response.data._embedded?.ticketClerkList || [];
    }

    async getById(id) {
        const response = await api.get(`/ticket-clerks/${id}`);
        return response.data; // ✅ direkt nesneyi döner
    }

    async create(ticketClerk) {
        const response = await api.post('/ticket-clerks', ticketClerk);
        return response.data._embedded?.ticketClerkList || [];
    }

    async update(id, updatedClerk) {
        const response = await api.put(`/ticket-clerks/${id}`, updatedClerk);
        return response.data._embedded?.ticketClerkList || [];
    }

    async delete(id) {
        const response = await api.delete(`/ticket-clerks/${id}`);
        return response.data._embedded?.ticketClerkList || [];
    }
}

export default new TicketClerkService();
