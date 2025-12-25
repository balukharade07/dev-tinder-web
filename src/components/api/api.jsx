import axios from 'axios';

class ApiService {
  constructor(baseURL) {
    this.api = axios.create({
      baseURL: baseURL || 'http://localhost:5000',
      timeout: 10000,
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this._initializeResponseInterceptor();
  }

  _initializeResponseInterceptor() {
    this.api.interceptors.response.use(
      (response) => response.data,
      (error) => {
        if (error.response?.status === 401) {
          window.location.href = '/auth/login';
        }

        return Promise.reject(error.response?.data || error.message);
      },
    );
  }

  // ---------- HTTP Methods ----------
  get(url, config = {}) {
    return this.api.get(url, config);
  }

  post(url, data = {}, config = {}) {
    return this.api.post(url, data, config);
  }

  put(url, data = {}, config = {}) {
    return this.api.put(url, data, config);
  }

  patch(url, data = {}, config = {}) {
    return this.api.patch(url, data, config);
  }

  delete(url, config = {}) {
    return this.api.delete(url, config);
  }
}

// Export single instance (Singleton)
export default ApiService;
