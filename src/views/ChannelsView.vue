<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { QLayout, QLayoutHeader, QLayoutContent, QButton, QSpace, QCard } from 'quicker.style'
import { ChannelService } from '@/services'

const router = useRouter()
const channels = ref()

const getChannels = async () => {
  ChannelService.list().then(
    (response) => {
      channels.value = response
    },
    (error: Error) => {
      console.error(error)
    }
  )
}

const createChannel = (): void => {
  ChannelService.create().then(
    (response) => {
      if (response.channel) router.push(`/editor/${response.channel.id}`)
    },
    (error: Error) => {
      console.error(error)
    }
  )
}

const removeChannel = (id: string): void => {
  ChannelService.remove(id).then(
    () => {
      getChannels()
    },
    (error: Error) => {
      console.error(error)
    }
  )
}

onMounted(() => {
  getChannels()
})
</script>

<template>
  <q-layout>
    <q-layout-header>
      <q-space align="center" justify="space-between">
        <h5>Projects</h5>
        <q-button variant="primary" size="small" @click="createChannel()">Create</q-button>
      </q-space>
    </q-layout-header>
    <q-layout-content>
      <div v-if="channels">
        <q-card class="card" v-for="item in channels.items" :key="item.id">
          <q-space align="center" justify="space-between">
            {{ item.name }}
            <q-space>
              <q-button size="small" @click="router.push(`/editor/${item.id}`)">Edit</q-button>
              <q-button size="small" @click="removeChannel(item.id)">Remove</q-button>
            </q-space>
          </q-space>
        </q-card>
      </div>
    </q-layout-content>
  </q-layout>
</template>

<style lang="scss">
.card {
  margin-bottom: 5px;

  .q-button {
    margin: 0 5px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
