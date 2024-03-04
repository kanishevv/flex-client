import { defineStore } from 'pinia'
import axios from 'axios'
import { AuthService } from '@/services'
import { QAlertProgrammatic } from 'quicker.style'
import { type IUser } from '@/interfaces/IUser'

interface State {
  id: string | null
  token: string | null
  user: IUser | null
  returnUrl: string | null
}

export const useAuthStore = defineStore('auth', {
  state: (): State => {
    return {
      id: localStorage.getItem('id'),
      token: localStorage.getItem('token'),
      user: null,
      returnUrl: null
    }
  },
  actions: {
    async setAuthUser(user: IUser | null) {
      this.user = user
    },
    me() {
      AuthService.me().then(
        (response) => {
          console.log(response)
        },
        (error) => {
          console.log(error)
          if (error.response.status === 401) this.logout()
        }
      )
    },
    async login(email: string, password: string) {
      return AuthService.login(email, password).then(
        (response) => {
          localStorage.setItem('id', response.id)
          localStorage.setItem('token', response.token)

          return Promise.resolve(response)
        },
        (response) => {
          QAlertProgrammatic.show({
            variant: 'danger',
            message: response.response.data.err.message
          })

          return Promise.reject(response)
        }
      )
    },
    async recover(email: string) {
      await axios.post(`${import.meta.env.VITE_API_URL}/auth/recover`, { username: email }).then(
        (response) => {
          return Promise.resolve(response.data)
        },
        (error) => {
          return Promise.reject(error.response.data)
        }
      )
    },
    async verify(code: number) {
      axios.post(`${import.meta.env.VITE_API_URL}/auth/verify`, code).then((response) => {
        return response
      })
    },
    async logout() {
      localStorage.removeItem('id')
      localStorage.removeItem('token')
    }
  }
})
