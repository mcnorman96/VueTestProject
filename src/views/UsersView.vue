<script setup >
  import UsersList from '../components/UsersList.vue';
  import {ref} from 'vue'
  const searchValue = ref("");
</script>

<template>
    <h1 class="mb-5 text-xl font-bold">Users</h1>
    <input type="text" v-model="searchValue" placeholder="search" class="absolute top-0 right-0 p-2 border">
    <UsersList :searchValue="searchValue" />
</template>