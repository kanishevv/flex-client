import axios from 'axios'
import authHeader from './auth-header'
import { API_URL } from '@/constants/config'

class AuthService {
  login(login: string, password: string) {
    return axios
      .post(`${API_URL}/auth/login`, {
        username: login,
        password: password
      })
      .then((response) => {
        return response.data
      })
  }

  recover(data: {}) {
    return axios.post(`${API_URL}/auth/recover`, data).then((response) => {
      return response
    })
  }

  verify(code: string) {
    return axios.post(`${API_URL}/auth/verify`, code).then((response) => {
      return response
    })
  }

  me() {
    return axios
      .get(`${API_URL}/auth/me`, {
        headers: authHeader()
      })
      .then((response) => {
        return response
      })
  }

  saveAndUpdatePersonal(data: {}) {
    return axios
      .put(`${API_URL}/account/personal`, data, {
        headers: authHeader()
      })
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        throw error
      })
  }

  getPersonalInfo() {
    return axios
      .get(`${API_URL}/account/personal`, { headers: authHeader() })
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        throw error
      })
  }

  deleteAccount() {
    return axios
      .delete(`${API_URL}/account`, {
        headers: authHeader()
      })
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        throw error
      })
  }
}

export default new AuthService()
