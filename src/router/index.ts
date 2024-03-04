import { createRouter, createWebHistory } from 'vue-router'
import { User, Guest } from './middleware/authentication'
import { useAuthStore } from '@/stores'
import middlewarePipeline from './middlewarePipeline'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'account' }
    },
    {
      path: '/auth',
      name: 'auth',
      redirect: { name: 'login' },
      meta: {
        middleware: [Guest]
      },
      component: () => import('../views/AuthView.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          meta: {
            middleware: [Guest]
          },
          component: () => import('../views/LoginView.vue')
        },
        {
          path: 'recover',
          name: 'recover',
          meta: {
            middleware: [Guest]
          },
          component: () => import('../views/RecoverView.vue')
        },
        {
          path: 'verify',
          name: 'verify',
          meta: {
            middleware: [Guest]
          },
          component: () => import('../views/VerifyView.vue')
        }
      ]
    },
    {
      path: '/account',
      name: 'account',
      meta: {
        middleware: [User]
      },
      component: () => import('../views/AccountView.vue'),
      children: [
        {
          path: 'channels',
          name: 'channels',
          meta: {
            middleware: [User]
          },
          component: () => import('../views/ChannelsView.vue')
        }
      ]
    },
    {
      path: '/editor/:channelId',
      name: 'editor',
      meta: {
        middleware: [User]
      },
      component: () => import('../views/EditorView.vue')
    },
    {
      path: '/editor/:channelId/:pageId',
      name: 'page',
      meta: {
        middleware: [User]
      },
      component: () => import('../views/EditorView.vue')
    },
    {
      path: '/ui',
      name: 'ui',
      component: () => import('../views/UiView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      meta: {
        middleware: [User]
      },
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (!to.meta.middleware) {
    return next()
  }

  const middleware: any = to.meta.middleware

  const context = {
    to,
    from,
    next,
    authStore
  }

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  })
})

export default router
