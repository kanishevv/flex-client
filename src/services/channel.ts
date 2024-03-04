import { API_URL } from '@/constants/config'
import axios from 'axios'
import authHeader from './auth-header'
import type { ISite } from '@/interfaces/ISite'

class ChannelService {
  list() {
    return axios
      .get(`${API_URL}/channels`, {
        headers: authHeader()
      })
      .then((response) => {
        return response.data
      })
  }

  create(data = {}) {
    return axios
      .post(`${API_URL}/channels`, data, {
        headers: authHeader()
      })
      .then((response) => {
        return response.data
      })
  }

  view(id: string) {
    return axios.get(`${API_URL}/channels/${id}`, { headers: authHeader() }).then((response) => {
      return response.data
    })
  }

  update(id: string, data: ISite) {
    return axios
      .put(`${API_URL}/channels/${id}`, data, {
        headers: authHeader()
      })
      .then((response) => {
        return response.data
      })
  }

  remove(id: string) {
    return axios
      .delete(`${API_URL}/channels/${id}`, {
        headers: authHeader()
      })
      .then((response) => {
        return response.data
      })
  }
}

export default new ChannelService()
