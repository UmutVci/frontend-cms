import api from "../lib/axios";

class SeatService {

    async getAll() {
        const response = await api.get('/seats');

        console.log('Veri:', response.data._embedded?.seatList);
        console.log('seatList bir dizi mi?', Array.isArray(response.data._embedded?.seatList));

        return response.data._embedded?.seatList || [];
    }

    async getById(id) {
        const response = await api.get(`/seats/${id}`);
        return response.data;
    }

    async create(seat) {
        const response = await api.post('/seats', seat);
        return response.data;
    }

    async update(id, updatedSeat) {
        const response = await api.put(`/seats/${id}`, updatedSeat);
        return response.data;
    }

    async delete(id) {
        const response = await api.delete(`/seats/${id}`);
        return response.status === 204;
    }
}

export default new SeatService();
