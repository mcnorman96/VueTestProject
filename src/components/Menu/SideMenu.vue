<script setup lang="ts">
import SideMenuItem from './SideMenuItem.vue'
</script>

<template>
  <div class="absolute w-52 left-0 top-0 min-h-screen bg-blue-950 p-5">
    <div class="header text-white text-xl mb-5 font-bold">
      Admin Panel
    </div>
    <div class="body ">
      <SideMenuItem>
        Overview
      </SideMenuItem>
      <SideMenuItem>
        Users
      </SideMenuItem>
    </div>
  </div>
</template>
