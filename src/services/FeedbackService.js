import api from "../lib/axios";

class FeedbackService {

    async getAll() {
        const response = await api.get('/feedbacks');

        // HATEOAS formatında embed edilen listeyi kontrol et
        console.log('Veri:', response.data._embedded?.feedbackList);
        console.log('feedbackList bir dizi mi?', Array.isArray(response.data._embedded?.feedbackList));

        return response.data._embedded?.feedbackList || [];
    }


    async getById(id) {
        const response = await api.get(`/feedbacks/${id}`);
        return response.data._embedded?.feedbackList || [];
    }

    async create(ticketClerk) {
        const response = await api.post('/feedbacks', ticketClerk);
        return response.data._embedded?.feedbackList || [];
    }

    async update(id, updatedClerk) {
        const response = await api.put(`/feedbacks/${id}`, updatedClerk);
        return response.data._embedded?.feedbackList || [];
    }

    async delete(id) {
        const response = await api.delete(`/feedbacks/${id}`);
        return response.data._embedded?.feedbackList || [];
    }
}

export default new FeedbackService();
