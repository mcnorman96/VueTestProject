<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
const menuItemStyle = 'text-xl text-gray-500 block hover:text-white flex flex-col justify-center text-center text-xs items-center p-8';
</script>

<template>
  <div class="flex app-container">
    <header class="min-h-screen w-32 bg-blue-950 ">
      <div class="wrapper">
        <nav>
          <RouterLink activeClass="text-white border-l-2" :class="menuItemStyle" to="/">
            <font-awesome-icon icon="fa-solid fa-solid fa-house" class="h-8 mb-2"/> 
            Home
          </RouterLink>
          <RouterLink activeClass="text-white border-l-2" :class="menuItemStyle" to="/users">
            <font-awesome-icon icon="fa-solid fa-user-group" class="h-8 mb-2 "/> 
            Users
          </RouterLink>
          <RouterLink activeClass="text-white border-l-2" :class="menuItemStyle" to="/products">
            <font-awesome-icon icon="fa-solid fa-shirt" class="h-8 mb-2 flex-c "/> 
            Products
          </RouterLink>
        </nav>
      </div>
    </header>

    <div class="relative w-full">
      <RouterView />
    </div>
  </div>
</template>
