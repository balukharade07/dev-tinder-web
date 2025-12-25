import authApi from './authApi';

class AuthServer {
  login(payload) {
    return authApi.post('/login', payload);
  }

  signup(payload) {
    return authApi.post('/signup', payload);
  }

  logout() {
    return authApi.post('/logout');
  }

  getLoggedInUser() {
    return authApi.get('/isLoggendIn');
  }

  forgotPassword(email) {
    return authApi.post(`/forgotPassword/${email}`);
  }

  resetPassword(id, payload) {
    return authApi.patch(`/resetPassword/${id}`, payload);
  }
}

export default new AuthServer();
