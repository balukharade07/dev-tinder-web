import api from './api';

class UserServer {
  getFeeds(page, limit) {
    console.log(page, limit)
    return api.post(`/feed?page=${page}&limit=${limit}`);
  }

  update(id, payload) {
    return api.patch(`/user/${id}`, payload);
  }

}

const userServer = new UserServer();
export default userServer;
