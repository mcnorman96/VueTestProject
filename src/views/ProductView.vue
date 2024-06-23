<script >
  import { useRoute } from 'vue-router';
  import {ref} from 'vue';

  export default {
    setup() {
      const route = useRoute()
      const product = ref(null);
      const errorMsg = ref(false);
      console.log(route.params.id);
      try {
          fetch(`http://dummyjson.com/products/${route.params.id}`)
            .then(res => res.json())
            .then(res => {
              console.log(res);
              if (res) {
                product.value = res;
                return;
              }
              errorMsg.value = true;
              product.value = null;
              return;
          });
        } catch (error) {
          Logger.error(error);
          errorMsg.value = true;
          product.value = null;
        }

        return {
          product,
          errorMsg
        }
    }
  }
</script>

<template>
  <div v-if="!product">
    Loading...
  </div>
  <div v-if="errorMsg">
    No results
  </div>
  <div v-if="product" class="max-w-2xl overflow-hidden bg-white shadow sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg font-medium leading-6 text-gray-900">
            Product: {{ product.title }}
        </h3>
        <p class="max-w-2xl mt-1 text-sm text-gray-500">
            Details and informations about product.
        </p>
    </div>
    <div class="border-t border-gray-200">
      <dl v-for="(val, key, index) of product" :value="val" :key="val">
            <div :class="{'bg-gray-50': index % 2 === 0, 'bg-white': index % 2 !== 0}"  class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                {{ key }}:
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ val }}
              </dd>
          </div>
      </dl>
    </div>
  </div>
</template>