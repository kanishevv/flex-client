<script setup lang="ts">
import { ref, reactive } from 'vue'
import { object, string } from 'yup'
import { useAuthStore } from '@/stores'
import {
  QCard,
  QGrid,
  QGridItem,
  QFormControl,
  QInput,
  QButton,
  QAlertProgrammatic
} from 'quicker.style'
import router from '@/router'

const authStore = useAuthStore()
const loading = ref(false)
const values: any = reactive({
  email: {
    value: '',
    helpText: '',
    validated: false
  }
})

const formSchema = object().shape({
  email: string()
    .email('Email is invalid!')
    .required('Email is required!')
    .max(50, 'Must be maximum 50 characters!')
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

const handleRecover = () => {
  loading.value = true

  const { recover } = authStore

  recover(values.email.value).then(
    () => router.push('/auth/verify'),
    (response) =>
      QAlertProgrammatic.show({
        closable: false,
        variant: 'danger',
        message: response.err.message
      })
  )
}
</script>

<template>
  <q-card class="recover">
    <div class="recover__info">
      To restore access to your account, access to your email address Mail and we will send a
      message to restore access.
    </div>
    <form class="recover__form" @submit.prevent="handleRecover">
      <q-grid :x-gap="20" :y-gap="20" :cols="2">
        <q-grid-item :span="2">
          <q-form-control>
            <q-input
              name="email"
              :placeholder="'E-mail'"
              v-model="values.email.value"
              @change="validate('email')"
              filled
            ></q-input>
          </q-form-control>
        </q-grid-item>
        <q-grid-item :span="1">
          <q-button variant="primary">Submit</q-button>
        </q-grid-item>
        <q-grid-item :span="1">
          <router-link to="/auth/login" custom v-slot="{ navigate }">
            <q-button variant="text" @click="navigate">Login</q-button>
          </router-link>
        </q-grid-item>
      </q-grid>
    </form>
  </q-card>
</template>

<style lang="scss">
.recover {
  width: 360px;

  &__info {
    margin-bottom: 1.25em;
  }

  &__form {
    .q-button {
      width: 100%;
    }
  }
}
</style>
