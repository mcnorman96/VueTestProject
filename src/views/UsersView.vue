<script setup lang="ts">
  import UsersList from '../components/UsersList.vue';
  import {ref} from 'vue';
  import PageLayout from '@/Layout/PageLayout.vue';
  const searchValue = ref<string>("");
</script>

<template>
    <PageLayout>
      <template v-slot:title>
        Users
      </template>
      <template v-slot:pageContent>
          <input type="text" v-model="searchValue" placeholder="search" class="absolute top-5 right-10 p-2 border">
          <UsersList :searchValue="searchValue" />
      </template>
    </PageLayout>
</template>