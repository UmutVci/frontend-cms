import api from "../lib/axios";

class HallService {
    async getAll() {
        const response = await api.get("/halls");
        return response.data._embedded?.domainHallList || [];
    }

    async create(hall) {
        try {
            const response = await api.post("/halls", hall);
            return response.status === 201 || response.status === 200;
        } catch (error) {
            console.error("Hall oluşturulurken hata:", error);
            return false;
        }
    }

    async update(id, hall) {
        try {
            const response = await api.put(`/halls/${id}`, hall);
            return response.status === 200;
        } catch (error) {
            console.error("Hall güncellenemedi:", error);
            return false;
        }
    }

    async delete(id) {
        try {
            const response = await api.delete(`/halls/${id}`);
            return response.status === 204;
        } catch (error) {
            console.error("Hall silinemedi:", error);
        }
    }
}

export default new HallService();
