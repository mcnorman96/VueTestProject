<script>
import { onMounted, ref, watch } from 'vue'

  export default {
    props: ['searchValue', 'sorting', 'limit'],
    inheritAttrs: false,
    setup(props) {
      const products = ref([]);
      const filteredProducts = ref([]);
      const errorMsg = ref(false);

      onMounted(() => {
        let url = "https://dummyjson.com/products";

        if (props.limit) {
          url += `?limit=${props.limit}`;
        }

        try {
          fetch(url)
            .then(res => res.json())
            .then(res => {
              console.log(res.products);

              if (res.products.length < 1) {
                errorMsg.value = true;
                products.value = [];
                return;
              }
              errorMsg.value = false;
              products.value = res.products;
              filteredProducts.value = res.products;
              return;
          });
        } catch (error) {
          Logger.error(error);
          products.value = [];
          filteredProducts.value = [];
          errorMsg.value = true;
        }
      })

      if (props.sorting) {
        watch(() => props.sorting, (a) => {
          const newSort = JSON.parse(a);
          const sortBy = newSort.sortBy;
          const order = newSort.order;

          filteredProducts.value.sort((first, second) => {
            if (order === "asc") {
              return second[sortBy] - first[sortBy];
            }
            return first[sortBy] - second[sortBy];
          });
        }, {immediate: true})
      }

      return {
        products,
        filteredProducts,
        errorMsg
      }
    }
  }
</script>

<template>
  <div v-if="!filteredProducts">
    Loading...
  </div>
  <div v-if="errorMsg">
    No results
  </div>
  <table v-if="filteredProducts && filteredProducts.length > 0" class="w-full overflow-hidden text-left table-fixed">
    <thead class="border border-solid border-grey">
      <tr>
        <th class="p-3">Product image</th>
        <th class="py-3">Title</th>
        <th class="py-3">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in filteredProducts" class="border border-solid border-grey" :value="product" :key="product">
        <slot name="product" v-bind="product"/>
      </tr>
    </tbody>
  </table>
</template>