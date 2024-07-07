<script>
export default {
  props: ['name', 'stat', 'img'],
  setup(props) {
    const image = props.img || '';
    const cardName = props.name || '';
    const cardStat = props.stat || '';

    return {
      image,
      cardName,
      cardStat
    }
  }
}
</script>

<template>
  <div class="flex mt-10 items-center p-5 m-2 border rounded-xl bg-blue-950 w-52 relative" v-if="image">
    <div class="iconContainer absolute -top-10 left-1/2 h-20 w-20 bg-blue-950 rounded-full -translate-x-1/2 flex items-center justify-center">
      <font-awesome-icon :icon="image" class="h-8 text-white "/> 
    </div>
    <div class="relative z-10 mt-2">
      <p class="font-bold text-gray-300 italic">{{cardName}}</p>
      <p class="text-white">{{cardStat}}</p>
    </div>   
  </div>
</template>