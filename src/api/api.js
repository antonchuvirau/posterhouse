import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { 'API-KEY': '7240ee71-9bd0-4085-9359-afb171a836fa' },
});

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/${userId}`)
      .then((response) => response.data);
  },

  getStatus(userId: number) {
    return instance.get(`profile/status/${userId}`);
  },

  updateStatus(status: string) {
    return instance.put('profile/status', { status });
  },
};

export const authAPI = {
  getUserAuthData() {
    return instance.get('auth/me')
      .then((response) => response.data);
  },

  logIn(email: string, password: string, rememberMe = false) {
    return instance.post('/auth/login', { email, password, rememberMe })
      .then((response) => response.data);
  },

  logOut() {
    return instance.delete('/auth/login')
      .then((response) => response.data);
  },
};

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  followUser(id: number) {
    return instance.post(`follow/${id}`)
      .then((response) => response.data);
  },

  unfollowUser(id: number) {
    return instance.delete(`follow/${id}`)
      .then((response) => response.data);
  },

  getUserAuthData() {
    console.log('Obsolete path. Use authAPI.getUserAuthData instead');
    return authAPI.getUserAuthData();
  },
};
