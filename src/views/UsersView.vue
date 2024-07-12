<script setup >
  import UsersList from '../components/UsersList.vue';
  import {ref} from 'vue';
  import PageLayout from '@/Layout/PageLayout.vue';
  import { useRoute } from 'vue-router';
  const searchValue = ref("");
  const route = useRoute();  
  const breadCrumbs = route.meta.breadcrumb;
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