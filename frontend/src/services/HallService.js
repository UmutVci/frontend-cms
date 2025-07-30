import api from "../lib/axios";
import axios from "axios";

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
            console.error("Error while creating Hall", error);
            return false;
        }
    }

    async getById(id) {
        const response = await api.get(`/halls/${id}`);
        return response.data || null;
    }

    async update(id, data) {
        try {
            const res = await api.put(`/halls/${id}`, data);
            return res.status >= 200 && res.status < 300;
        } catch (err) {
            console.error("HallService.update error:", err.response?.status, err.response?.data);
            return false;
        }
    }

    async delete(id) {
        try {
            const response = await api.delete(`/halls/${id}`);
            return response.status === 204;
        } catch (error) {
            console.error("Could not delete Hall", error);
        }
    }
}

export default new HallService();
