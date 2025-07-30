import api from '../lib/axios';

class SessionService {
    async getAll() {
        const response = await api.get('/sessions');
        return response.data._embedded?.domainSessionList || [];
    }

    async getById(id) {
        const response = await api.get(`/sessions/${id}`);
        return response.data;
    }

    async create(session) {
        try {
            const response = await api.post('/sessions', session);
            return response.data;
        } catch (err) {
            throw err;
        }
    }

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

    async delete(id) {
        try {
            const r = await api.delete(`/sessions/${id}`)
            return r.status >= 200 && r.status < 300
        } catch (err) {
            console.error('Error deleting session:', err.response?.status, err.response?.data)
            return false
        }
    }

    async getAllSessionsFromHall(hallId) {
        const response = await api.get(`/sessions/hall/${hallId}`);
        return response.data._embedded?.domainSessionList || [];
    }
    async getSeatsBySessionId(sessionId) {
        const response = await api.get(`/sessions/${sessionId}/seats`);
        return response.data;
    }
    async getAllSessionsFromMovie(movieId) {
        const response = await api.get(`/sessions/movie/${movieId}`);
        return response.data._embedded?.domainSessionList || [];
    }

    async endTimeBySessionId(id) {
        const response = await api.get(`/sessions/${id}/session/end`);
        return response.data;
    }
}

export default new SessionService();
