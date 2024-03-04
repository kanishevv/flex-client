<script setup lang="ts">
import { ref, reactive } from 'vue'
import { object, string } from 'yup'
import { useAuthStore } from '@/stores'
import { useRouter } from 'vue-router'
import { QCard, QGrid, QGridItem, QFormControl, QForm, QInput, QButton } from 'quicker.style'

const store = useAuthStore()
const router = useRouter()
const loading = ref(false)
const values: any = reactive({
  email: {
    value: '',
    helpText: '',
    validated: false
  },
  password: {
    value: '',
    helpText: '',
    validated: false
  }
})

const formSchema = object().shape({
  email: string()
    .email('Email is invalid!')
    .required('Email is required!')
    .max(50, 'Must be maximum 50 characters!'),
  password: string()
    .required('Password is required!')
    .min(6, 'Must be at least 6 characters!')
    .max(40, 'Must be maximum 40 characters!')
})

const validate = (field: string) => {
  formSchema
    .validateAt(field, values)
    .then(() => {
      values[field].validated = true
      values[field].helpText = ''
    })
    .catch((err: any) => {
      values[field].validated = false
      values[field].helpText = err.message
    })
}

const handleLogin = () => {
  loading.value = true

  const { login } = store

  login(values.email.value, values.password.value).then(
    () => {
      router.push('/account')
    },
    (error) => {
      console.error('error', error)
    }
  )
}
</script>

<template>
  <q-card class="login">
    <q-form class="login__form" @submit.prevent="handleLogin">
      <q-grid :x-gap="20" :y-gap="20" :cols="2">
        <q-grid-item :span="2">
          <q-form-control>
            <q-input
              :name="'email'"
              :type="'email'"
              :placeholder="'E-mail *'"
              :autocomplete="'username'"
              filled
              v-model="values.email.value"
              @change="validate('email')"
            ></q-input>
          </q-form-control>
        </q-grid-item>
        <q-grid-item :span="2">
          <q-form-control>
            <q-input
              :name="'password'"
              :type="'password'"
              :placeholder="'Password *'"
              :autocomplete="'current-password'"
              toggle-password
              filled
              v-model="values.password.value"
              @change="validate('password')"
            ></q-input>
          </q-form-control>
        </q-grid-item>
        <q-grid-item :span="1">
          <q-button variant="primary">Submit</q-button>
        </q-grid-item>
        <q-grid-item :span="1">
          <router-link to="/auth/recover" custom v-slot="{ navigate }">
            <q-button variant="text" @click="navigate">Restore account</q-button>
          </router-link>
        </q-grid-item>
      </q-grid>
    </q-form>
  </q-card>
</template>

<style lang="scss">
.login {
  width: 360px;

  &__form {
    .q-button {
      width: 100%;
    }
  }
}
</style>
