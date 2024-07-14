<script lang="ts">
import { onMounted, ref, watch } from 'vue'

interface userinterface {
  [key: string]: any
}

export default {
  props: ['searchValue', 'limit'],
  setup(props) {
    const users = ref<userinterface[]>([])
    const errorMsg = ref<boolean>(false)
    const limit: number = props.limit

    onMounted(() => {
      watch(
        () => props.searchValue,
        (val) => {
          let url
          if (limit) {
            url = `https://dummyjson.com/users/search?limit=${limit}`
          } else if (val) {
            url = `https://dummyjson.com/users/search?q=${val}`
          } else {
            url = 'https://dummyjson.com/users'
          }

          try {
            fetch(url)
              .then((res) => res.json())
              .then((res) => {
                if (res.users.length < 1) {
                  errorMsg.value = true
                  users.value = []
                  return
                }
                errorMsg.value = false
                users.value = res.users
                return
              })
          } catch (error) {
            console.error(error)
            users.value = []
            errorMsg.value = true
          }
        },
        { immediate: true }
      )
    })

    return {
      users,
      errorMsg,
      limit
    }
  }
}
</script>

<template>
  <div v-if="!users.length && !users">Loading...</div>
  <div v-if="errorMsg">No results</div>
  <div class="tableContainer">
    <table v-if="users.length > 0" class="w-full overflow-hidden text-left table-fixed border">
      <thead class="border-b-2 border-grey">
        <tr>
          <th class="p-3">Profile image</th>
          <th class="py-3">Username</th>
          <th v-if="!limit" class="py-3">First name</th>
          <th v-if="!limit" class="py-3">Last name</th>
          <th class="py-3">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" class="border-b-2 border-grey" :value="user" :key="user">
          <td class="p-3">
            <a :href="'users/' + user.id"><img :src="user.image" class="w-10 pr-5" /></a>
          </td>
          <td class="py-3">
            <a :href="'users/' + user.id">{{ user.username }}</a>
          </td>
          <td v-if="!limit" class="py-3">
            <a :href="'users/' + user.id">{{ user.firstName }}</a>
          </td>
          <td v-if="!limit" class="py-3">
            <a :href="'users/' + user.id">{{ user.lastName }}</a>
          </td>
          <td class="py-3">
            <a :href="'users/' + user.id">{{ user.email }}</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
