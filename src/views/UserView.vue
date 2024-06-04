<script setup >
  import UserList from '../components/UserList.vue';
  import {ref} from 'vue'
  const searchValue = ref("");

  const searchOnChange = (val) => {
    searchValue.value = 
    console.log(val)
  }
</script>

<template>
    <h1 class="mb-5 text-xl font-bold">Users</h1>
    <input type="text" :value=searchValue placeholder="search" class="absolute top-0 right-0 p-2 border">
    <UserList :searchValue=searchValue >
      <template #user="{ image, username, firstName, lastName, email }">
        <td class="p-3"><img :src=image class="w-10 pr-5" /></td>
        <td class="py-3">{{ username }}</td>
        <td class="py-3">{{ firstName }}</td>
        <td class="py-3">{{ lastName }}</td>
        <td class="py-3">{{ email }}</td>
      </template>
    </UserList>
</template>