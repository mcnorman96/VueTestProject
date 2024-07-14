<script setup lang="ts">
import ProductList from '../components/ProductList.vue'
import PageLayout from '@/Layout/PageLayout.vue'
import { ref } from 'vue'

interface sortinginterface {
  sortBy: string
  order: string
}

const sorting = ref<sortinginterface>('{"sortBy": "title", "order": "asc" }')
const options = ref<sortinginterface[]>([
  { value: '{"sortBy": "title", "order": "asc" }', text: 'Title - ASC' },
  { value: '{"sortBy": "title", "order": "desc" }', text: 'Title - DESC' },
  { value: '{"sortBy": "price", "order": "asc" }', text: 'Price - ASC' },
  { value: '{"sortBy": "price", "order": "desc" }', text: 'Price - DESC' }
])
</script>

<template>
  <PageLayout>
    <template v-slot:title> Products </template>
    <template v-slot:pageContent>
      <select v-model="sorting" class="absolute top-5 right-10 p-2 border w-100">
        <option
          v-for="option in options"
          v-bind:value="option.value"
          :key="option.value"
          :value="option.value"
          :selected="option.value == sorting"
        >
          {{ option.text }}
        </option>
      </select>
      <ProductList :sorting="sorting">
        <template #product="{ thumbnail, title, price, id }">
          <td class="p-3">
            <a :href="'products/' + id"><img :src="thumbnail" class="w-10 pr-5" /></a>
          </td>
          <td class="py-3">
            <a :href="'products/' + id">{{ title }}</a>
          </td>
          <td class="py-3">
            <a :href="'products/' + id">{{ price }}</a>
          </td>
        </template>
      </ProductList>
    </template>
  </PageLayout>
</template>
