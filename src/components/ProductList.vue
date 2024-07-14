<script lang="ts">
import { onMounted, ref, watch } from 'vue'

interface productinterface {
  [key: string]: any
}

export default {
  props: ['searchValue', 'sorting', 'limit'],
  inheritAttrs: false,
  setup(props) {
    const products = ref<productinterface[]>([])
    const filteredProducts = ref<productinterface[]>([])
    const errorMsg = ref<boolean>(false)

    onMounted(() => {
      let url = 'https://dummyjson.com/products'

      if (props.limit) {
        url += `?limit=${props.limit}`
      }

      try {
        fetch(url)
          .then((res) => res.json())
          .then((res) => {
            if (res.products.length < 1) {
              errorMsg.value = true
              products.value = []
              return
            }
            errorMsg.value = false
            products.value = res.products
            filteredProducts.value = res.products
            return
          })
      } catch (error) {
        console.error(error)
        products.value = []
        filteredProducts.value = []
        errorMsg.value = true
      }
    })

    if (props.sorting) {
      watch(
        () => props.sorting,
        (a) => {
          const newSort: JSON = JSON.parse(a)
          const sortBy: string = newSort.sortBy
          const order: string = newSort.order

          filteredProducts.value.sort((first, second) => {
            if (order === 'asc') {
              return second[sortBy] - first[sortBy]
            }
            return first[sortBy] - second[sortBy]
          })
        },
        { immediate: true }
      )
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
  <div v-if="!filteredProducts">Loading...</div>
  <div v-if="errorMsg">No results</div>
  <table
    v-if="filteredProducts && filteredProducts.length > 0"
    class="w-full overflow-hidden text-left table-fixed"
  >
    <thead class="border border-solid border-grey">
      <tr>
        <th class="p-3">Product image</th>
        <th class="py-3">Title</th>
        <th class="py-3">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="product in filteredProducts"
        class="border border-solid border-grey"
        :value="product"
        :key="product"
      >
        <slot name="product" v-bind="product" />
      </tr>
    </tbody>
  </table>
</template>
