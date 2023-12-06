<template>
  <div class="container mx-auto px-6 py-8 w-full lg:w-7/12 min-w-max">
    <section class="bg-white border border-gray-300 rounded-2xl">
      <div class="mt-7 mb-4 flex items-center flex-col">
        <!-- Title -->
        <h2 class="font-bold mb-3 text-md">Users</h2>

        <!-- Input -->
        <div class="relative">
          <input
            class="border p-3 text-xs rounded-3xl pl-4 w-80"
            placeholder="Search"
            type="text"
            v-model="searchQuery"
          />
          <div
            v-if="searchQuery"
            @click="clearSearchQuery"
            class="absolute right-2 top-2 cursor-pointer"
          >
            <img :src="IconClose" alt="Clear text" />
          </div>
        </div>
      </div>

      <!-- Table -->
      <table class="table-auto w-full mt-6">
        <thead>
          <tr class="text-left text-xs">
            <th class="pb-3 font-thin min-w-min"></th>
            <th class="pb-3 font-thin min-w-min">Name</th>
            <th class="pb-3 font-thin min-w-min">E-mail</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in filteredUsers"
            :key="user.id"
            class="border-t h-20 text-xs font-semibold"
          >
            <td>
              <img
                :src="user.avatarUrl"
                :alt="user.name"
                class="h-10 w-10 rounded-lg border-gray-300 border mr-5 ml-5 m-auto min-w-fit"
              />
            </td>
            <td class="pr-5">{{ user.name }}</td>
            <td class="pr-5">{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { getRandomNumber, searchTextInField } from '@utils/misc'
import type { UserList } from './UserList'
import IconClose from '@assets/icon-close.svg'

export default defineComponent({
  name: 'UserList',
  setup() {
    const dataCombined = ref<UserList[]>([])
    const searchQuery = ref('')
    const tableUsersHeaders = ['', 'Name', 'E-mail']

    async function fetchUsers() {
      const users = await fetch('https://jsonplaceholder.typicode.com/users')
      const avatars = await fetch('https://rickandmortyapi.com/api/character')

      const usersData = await users.json()
      const avatarsData = await avatars.json()

      dataCombined.value = usersData.map(({ email, name, id }: UserList) => ({
        avatarUrl: avatarsData.results[getRandomNumber(avatarsData.results.length)].image,
        email,
        id,
        name
      }))
    }

    const filteredUsers = computed(() =>
      dataCombined.value.filter(
        ({ email, name }) =>
          searchTextInField(name, searchQuery) || searchTextInField(email, searchQuery)
      )
    )

    fetchUsers()

    return { dataCombined, filteredUsers, IconClose, searchQuery, tableUsersHeaders }
  },
  methods: {
    clearSearchQuery() {
      this.searchQuery = ''
    }
  }
})
</script>
