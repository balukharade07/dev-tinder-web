import api from './api';

class AuthServer {
  login(payload) {
    return api.post('/login', payload);
  }

  signup(payload) {
    return api.post('/signup', payload);
  }

  logout() {
    return api.post('/logout');
  }

  getLoggedInUser() {
    return api.get('/isLoggendIn');
  }

  forgotPassword(email) {
    return api.post(`/forgotPassword/${email}`);
  }

  resetPassword(id, payload) {
    return api.patch(`/resetPassword/${id}`, payload);
  }
}

const authServer = new AuthServer();
export default authServer;
