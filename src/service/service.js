import axios from "axios";
const service = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

// service.headers = { "Access-Control-Allow-Origin": "*" };

service.interceptors.request.use((interceptedRequest) => {
  interceptedRequest.headers.Authorization = `Bearer ${localStorage.getItem(
    "token"
  )}`;
  return interceptedRequest;
});

service.getReviewsOfPicture = async (id) => {
  const response = await service.get(`/photos/${id}/reviews`);
  return response.data.reviews;
};

export default service;
