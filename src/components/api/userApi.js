import ApiService from './api';

const userApi = new ApiService(import.meta.env.VITE_USER_SERVER_URL);

export default userApi;
