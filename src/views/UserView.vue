<script >
  import { useRoute } from 'vue-router';
  import {ref} from 'vue';
  import PageLayout from '@/Layout/PageLayout.vue';

  export default {
    components: {PageLayout},
    setup() {
      const route = useRoute()
      const user = ref(null);
      const errorMsg = ref(false);
      
      try {
          fetch(`http://dummyjson.com/users/${route.params.id}`)
            .then(res => res.json())
            .then(res => {
              if (res) {
                user.value = res;
                return;
              }
              errorMsg.value = true;
              user.value = null;
              return;
          });
        } catch (error) {
          Logger.error(error);
          errorMsg.value = true;
          user.value = null;
        }

        return {
          user,
          errorMsg,
        }
    }
  }
</script>

<template>
  <PageLayout>
      <template v-slot:breadCrumb>
        Admin > Users > User
      </template>
      <template v-slot:title>
        Single User
      </template>
      <template v-slot:pageContent>
        <div v-if="!user">
          Loading...
        </div>
        <div v-if="errorMsg">
          No results
        </div>
        <div v-if="user" class="max-w-2xl overflow-hidden bg-white shadow sm:rounded-lg">
          <div class="px-4 py-5 sm:px-6">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                  User: {{ user.username }}
              </h3>
              <p class="max-w-2xl mt-1 text-sm text-gray-500">
                  Details and informations about user.
              </p>
          </div>
          <div class="border-t border-gray-200">
            <dl v-for="(val, key, index) of user" :value="val" :key="val">
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
  </PageLayout>
</template>