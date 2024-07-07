<template >
  <div class="px-10 py-5 bg-gray-200 min-h-full">
    <div class="breadCrumb italic text-sm">
      <slot name="breadCrumb"></slot>
    </div>
    <div class="title mt-2">
      <h1 class="mb-5 text-xl font-bold"><slot name="title"></slot></h1>
    </div>
    <div class="pageContent bg-white">
      <slot name="pageContent"></slot>
    </div>
  </div>
</template>