<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
const breadCrumbs: string[] = route.meta.breadcrumb
</script>

<template>
  <div class="px-10 py-5 bg-gray-200 min-h-full">
    <div class="breadCrumb italic text-sm flex">
      <div
        class="pr-1"
        v-for="(breadcrumb: string, index: number) in breadCrumbs"
        :value="breadcrumb"
        :key="breadcrumb"
      >
        {{ breadcrumb }} {{ index < breadCrumbs.length - 1 ? '  >' : '' }}
      </div>
    </div>
    <div class="title mt-2">
      <h1 class="mb-5 text-xl font-bold"><slot name="title"></slot></h1>
    </div>
    <div class="pageContent bg-white">
      <slot name="pageContent"></slot>
    </div>
  </div>
</template>
