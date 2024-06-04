<script>
import { ref } from 'vue'

  export default {
    props: {
      searchValue: String,
    },
    setup() {
      const users = ref([]);
  
      console.log(this);
      fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(res => {
          return users.value = res.users
        });
        return { users }
    }
  }
</script>

<template>
  <div v-if="!users.length">
    Loading...
  </div>
  <table class="w-full text-left table-fixed ">
    <thead class="border border-solid border-grey">
      <tr>
        <th class="p-3">Profile image</th>
        <th class="py-3">Username</th>
        <th class="py-3">First name</th>
        <th class="py-3">Last name</th>
        <th class="py-3">Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" class="border border-solid border-grey">
        <slot name="user" v-bind="user"/>
      </tr>
    </tbody>
  </table>
</template>