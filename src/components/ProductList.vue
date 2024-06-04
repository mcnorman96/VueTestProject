<script>
import { ref } from 'vue'

  export default {
    setup() {
      const products = ref([]);

      fetch('https://dummyjson.com/products?limit=10')
        .then(res => res.json())
        .then(res => {
          return products.value = res.products
        });
        return { products }
    }
  }

</script>

<template>
  <ul>
    <li v-if="!products.length">
      Loading...
    </li>
    <li v-for="product in products">
      <slot name="product" v-bind="product"/>
    </li>
  </ul>
</template>