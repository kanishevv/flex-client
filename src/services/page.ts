import { API_URL } from '@/constants/config'
import axios from 'axios'
import authHeader from './auth-header'
import type { IPage } from '@/interfaces/IPage'

class PageService {
  list(projectId: string) {
    return axios
      .get(`${API_URL}/projects/${projectId}/pages`, { headers: authHeader() })
      .then((response) => {
        return response.data
      })
  }

  create(projectId: string, data: IPage | {} = {}) {
    return axios
      .post(`${API_URL}/projects/${projectId}/pages`, data, {
        headers: authHeader()
      })
      .then((response) => {
        return response.data
      })
  }

  view(id: string) {
    return axios
      .get(`${API_URL}/pages/${id}`, {
        headers: authHeader()
      })
      .then((response) => {
        return response.data
      })
  }

  update(id: string, data: any) {
    return axios
      .put(`${API_URL}/pages/${id}`, data, {
        headers: authHeader()
      })
      .then((response) => {
        return response.data
      })
  }

  remove(id: string) {
    return axios
      .delete(`${API_URL}/pages/${id}`, {
        headers: authHeader()
      })
      .then((response) => {
        return response.data
      })
  }
}

export default new PageService()
