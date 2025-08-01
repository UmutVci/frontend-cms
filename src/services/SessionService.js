import api from '../lib/axios';

class SessionService {
    // Tüm oturumları getir
    async getAll() {
        const response = await api.get('/sessions');
        return response.data._embedded?.domainSessionList || [];
    }

    // ID'ye göre oturumu getir
    async getById(id) {
        const response = await api.get(`/sessions/${id}`);
        return response.data;
    }

    async create(session) {
        try {
            const response = await api.post('/sessions', session);
            return response.data;
        } catch (err) {
            // Opsiyonel: console.log(err.response?.data || err);
            throw err; // Hata varsa dışarı fırlat
        }
    }

    // Oturumu güncelle
    async update(id, updatedSession) {
        const response = await api.put(`/sessions/${id}`, updatedSession);
        return response.data;
    }
    async reserveSeats(sessionId, seatIds, customerId) {
        const response = await api.post(
            `/sessions/${sessionId}/reserve?customerId=${customerId}`,
            seatIds
        );
        return response.data;
    }

    // Oturumu sil
    async delete(id) {
        const response = await api.delete(`/sessions/${id}`);
        return response.data;
    }

    // Belirli bir salonun tüm oturumlarını getir
    async getAllSessionsFromHall(hallId) {
        const response = await api.get(`/sessions/hall/${hallId}`);
        return response.data._embedded?.domainSessionList || [];
    }
    async getSeatsBySessionId(sessionId) {
        const response = await api.get(`/sessions/${sessionId}/seats`);
        return response.data;
    }
    // Belirli bir filmin tüm oturumlarını getir
    async getAllSessionsFromMovie(movieId) {
        const response = await api.get(`/sessions/movie/${movieId}`);
        return response.data._embedded?.domainSessionList || [];
    }

    // Belirli bir oturumun bitiş zamanını getir
    async endTimeBySessionId(id) {
        const response = await api.get(`/sessions/${id}/session/end`);
        return response.data; // LocalDateTime string olarak gelir (örneğin: "2025-07-27T21:00:00")
    }
}

export default new SessionService();
