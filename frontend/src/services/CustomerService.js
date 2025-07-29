import api from "../lib/axios";

class CustomerService {

    async getAll() {
        const response = await api.get('/customers')
        console.log('Veri:', response.data._embedded?.domainHallList);
        console.log(Array.isArray(response));
        return response.data._embedded?.domainCustomerList || [];
    }

    async getById(id) {
        const response = await api.get(`/customers/${id}`);
        return response.data._embedded?.domainCustomerList || [];
    }

    async create(ticketClerk) {
        const response = await api.post('/customers', ticketClerk);
        return response.data._embedded?.domainCustomerList || [];
    }

    async update(id, updatedClerk) {
        const response = await api.put(`/customers/${id}`, updatedClerk);
        return response.data._embedded?.domainCustomerList || [];
    }

    async delete(id) {
        const response = await api.delete(`/customers/${id}`);
        return response.data._embedded?.domainCustomerList || [];
    }
}

export default new CustomerService();
