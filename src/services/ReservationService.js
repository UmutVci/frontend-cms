import api from "../lib/axios";

class ReservationService {

    async getAll() {
        const response = await api.get('/reservations');

        return response.data._embedded?.reservationList || [];
    }

    async getById(id) {
        const response = await api.get(`/reservations/${id}`);
        return response.data;
    }

    async create(reservation) {
        const response = await api.post('/reservations', reservation);
        return response.data;
    }

    async update(id, updatedReservation) {
        const response = await api.put(`/reservations/${id}`, updatedReservation);
        return response.data;
    }

    async delete(id) {
        const response = await api.delete(`/reservations/${id}`);
        return response.status === 204;
    }
}

export default new ReservationService();
