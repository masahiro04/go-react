import axios from 'axios';
import { API_PATH } from './config';
// import { User as UserModel } from '../types/user';

class User {
  // eslint-disable-next-line class-methods-use-this
  headers() {
    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
  }
  
  async me() {
    return axios.get(`${API_PATH}/users/me`, this.headers());
  }
  
  // async update(user: { name: string; company: Company; id: number | null }, group_id: number) {
  //   const token = localStorage.getItem('token');
  //   return axios.put(`${API_PATH}/users/${user.id}?group_id=${group_id}`, user, this.headers());
  // }
}

export default new User();
