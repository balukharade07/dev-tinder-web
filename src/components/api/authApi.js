import ApiService from './api';

const authApi = new ApiService(
  import.meta.env.VITE_AUTH_SERVER_URL
);

export default authApi;


