import api from './api';

class UserServer {
  getFeeds(page, limit) {
    return api.post(`/feed?page=${page}&limit=${limit}`);
  }

  update(id, payload) {
    return api.patch(`/user/${id}`, payload);
  }

  connection(id, status) {
    return api.post(`/request/send/${status}/${id}`);
  }

  requestReceived() {
    return api.post('/user/requests/received');
  }

  requestReview(requestId, status) {
    return api.post(`/request/review/${status}/${requestId}`);
  }

  getConnection() {
    return api.post('/user/connections');
  }
}

const userServer = new UserServer();
export default userServer;
