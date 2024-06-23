<script setup>
import ProductList from '../components/ProductList.vue';
import UsersList from '../components/UsersList.vue';
import InfoCard from '../components/InfoCard.vue';
import Chart from '../components/Chart.vue';
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <div class="min-h-[50vh]">
      <h1 class="mb-3 text-2xl font-bold">Welcome to the admin panel</h1>
      <div class="flex -mx-2 ">
        <InfoCard img="fa-solid fa-user-group" color="yellow" name="Current users" stat="600" />
        <InfoCard img="fa-solid fa-coins" color="blue" name="Revenue today" stat="12600" />
        <InfoCard img="fa-solid fa-shirt" color="green" name="Products" stat="120" />
      </div>
    </div>

    <div class="min-h-[50vh]">
      <Chart />
    </div>

    <div class="min-h-[50vh]">
      <h2 class="mb-5 text-xl font-bold">Most sold products</h2>
      <ProductList limit="5">
        <template #product="{ thumbnail, title, price, id }">
          <td class="p-3"><a :href="'products/' + id"><img :src=thumbnail class="w-10 pr-5" /></a></td>
          <td class="py-3"><a :href="'products/' + id">{{ title }}</a></td>
          <td class="py-3"><a :href="'products/' + id">{{ price }}</a></td>
        </template>
      </ProductList>
    </div>

    <div class="min-h-[50vh]">
      <h2 class="mb-5 text-xl font-bold">Recent users</h2>
      <UsersList :searchValue="searchValue" limit="5">
        <template #user="{ image, username, email, id }">
          <td class="p-3"><a :href="'users/' + id"><img :src=image class="w-10 pr-5" /></a></td>
          <td class="py-3"><a :href="'users/' + id">{{ username }}</a></td>
          <td class="py-3"><a :href="'users/' + id">{{ email }}</a></td>
        </template>
      </UsersList>
    </div>

  </div>
</template>