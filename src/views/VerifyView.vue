<script setup lang="ts">
import { QCard, QGrid, QGridItem, QFormControl, QInput, QButton } from 'quicker.style'

// this.$refs.email.focus()
</script>

<template>
  <q-card class="verify">
    <div class="verify__info">Enter the verification code sent to your email address.</div>
    <form class="verify__form" action="#">
      <q-grid :x-gap="20" :y-gap="20" :cols="4">
        <q-grid-item :span="1">
          <q-form-control>
            <q-input name="one" :maxlength="1" type="text" filled autofocus></q-input>
          </q-form-control>
        </q-grid-item>
        <q-grid-item :span="1">
          <q-form-control>
            <q-input name="two" :maxlength="1" type="text" filled></q-input>
          </q-form-control>
        </q-grid-item>
        <q-grid-item :span="1">
          <q-form-control>
            <q-input name="tree" :maxlength="1" type="text" filled></q-input>
          </q-form-control>
        </q-grid-item>
        <q-grid-item :span="1">
          <q-form-control>
            <q-input name="four" :maxlength="1" type="text" filled></q-input>
          </q-form-control>
        </q-grid-item>
        <q-grid-item :span="2">
          <q-button variant="primary">Submit</q-button>
        </q-grid-item>
        <q-grid-item :span="2">
          <q-button variant="text">Send code again</q-button>
        </q-grid-item>
      </q-grid>
    </form>
  </q-card>
</template>

<style lang="scss">
.verify {
  width: 360px;

  &__info {
    margin-bottom: 1.25em;
  }

  &__form {
    input {
      text-align: center;
    }
    input[type='number']::-webkit-outer-spin-button,
    input[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type='number'] {
      -moz-appearance: textfield;
    }
    input[type='number']:hover,
    input[type='number']:focus {
      -moz-appearance: number-input;
    }
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    .q-button {
      width: 100%;
    }
  }
}
</style>
