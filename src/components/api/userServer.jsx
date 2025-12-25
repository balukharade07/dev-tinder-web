import userApi from './userApi';

class UserServer {
  getFeeds(page, limit) {
    return userApi.post(`/feed?page=${page}&limit=${limit}`);
  }

  update(id, payload) {
    return userApi.patch(`/user/${id}`, payload);
  }

  connection(id, status) {
    return userApi.post(`/request/send/${status}/${id}`);
  }

  requestReceived() {
    return userApi.post('/user/requests/received');
  }

  requestReview(requestId, status) {
    return userApi.post(`/request/review/${status}/${requestId}`);
  }

  getConnection() {
    return userApi.post('/user/connections');
  }
}

const userServer = new UserServer();
export default userServer;
