import axios from 'axios';
import { API_PATH } from './config';

class Blog {
  // eslint-disable-next-line class-methods-use-this
  headers() {
    return {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
  }

  async findAll() {
    return axios.get(`${API_PATH}/blogs`, this.headers());
  }
  
  async findOne(id: null | undefined) {
    return axios.get(`${API_PATH}/blogs/${id}`, this.headers());
  }

  async save(title: string, body: string) {
    return axios.post(`${API_PATH}/blogs`, {
      title,
      body,
    }, this.headers());
  }

  async update(id: null | undefined, title: string, description: string) {
    return axios.put(`${API_PATH}/blogs/${id}`, {
      id,
      title,
      description,
    }, this.headers());
  }
  
  async delete(id: null | undefined) {
    return axios.delete(`${API_PATH}/blogs/${id}`,  this.headers());
  }
}

export default new Blog();
