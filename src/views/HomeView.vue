<script setup >
  import ProductList from '../components/ProductList.vue';
</script>

<template>
  <div class="container">
    <h1 class="mb-5 text-xl font-bold">Most sold products</h1>
    <ProductList >
      <template #product="{ thumbnail, title }">
        <div class="flex p-3 align-middle border border-black border-solid grey">
          <img :src=thumbnail class="w-10 pr-5" />
          <div class="align-middle details">
            <h3>
              {{title}}
            </h3>
          </div>
        </div>
      </template>
    </ProductList>
    
  </div>
</template>