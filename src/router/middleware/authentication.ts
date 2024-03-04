import type { IUser } from '@/interfaces/IUser'
import { useAuthStore } from '@/stores'
import AuthService from '@/services/auth'
import type { NavigationGuardNext } from 'vue-router'

export const User = async ({ next }: { next: NavigationGuardNext }) => {
  try {
    const authStore = useAuthStore()
    const response = await AuthService.me()
    const user: IUser = response.data

    await authStore.setAuthUser(user)

    if (!user) {
      return next({
        name: 'login'
      })
    }
  } catch (error) {
    document.location.href = '/auth/login'
  }

  return next()
}

export const Guest = async ({ next }: { next: NavigationGuardNext }) => {
  return next()
}
