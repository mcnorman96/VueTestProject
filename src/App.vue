<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
const menuItemStyle = 'py-2 text-xl text-white block hover:text-blue-500';
</script>

<template>
  <div class="flex app-container">
    <header class="min-h-screen p-5 w-52 bg-blue-950 ">
      <h1 class="mb-5 text-xl font-bold text-white header">
        Admin Panel
      </h1>
      <div class="wrapper">
        <nav>
          <RouterLink activeClass="font-bold" :class="menuItemStyle" to="/">Home</RouterLink>
          <RouterLink activeClass="font-bold" :class="menuItemStyle" to="/users">Users</RouterLink>
          <RouterLink activeClass="font-bold" :class="menuItemStyle" to="/products">Products</RouterLink>
        </nav>
      </div>
    </header>

    <div class="relative w-full m-5">
      <RouterView />
    </div>
  </div>
</template>
