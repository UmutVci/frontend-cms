import api from '../lib/axios';

class SessionService {
    // GET /sessions → [ { id, movieId, hallId, startTime, … }, … ]
    async getAll() {
        const response = await api.get('/sessions');
        // eğer HAL+Spring HATEOAS kullanılmıyorsa direkt response.data olabilir
        return response.data._embedded?.domainSessionList || [];
    }

    // GET /sessions/:id → tek bir session objesi
    async getById(id) {
        const response = await api.get(`/sessions/${id}`);
        return response.data;
    }

    // POST /sessions → sunucudan yeni kaydı dönüyorsa
    async create(session) {
        const response = await api.post('/sessions', session);
        // eğer tek bir obje dönüyorsa:
        return response.data;
    }

    // PUT /sessions/:id → güncellenmiş obje
    async update(id, session) {
        const response = await api.put(`/sessions/${id}`, session);
        return response.data;
    }

    // DELETE /sessions/:id → silindikten sonra genelde { } veya 204 gelir
    async delete(id) {
        const response = await api.delete(`/sessions/${id}`);
        return response.status === 204;
    }
}

export default new SessionService();
