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
  <div class="flex items-center p-5 m-2 border rounded bg-blue-950 w-52" v-if="image">
    <font-awesome-icon :icon="image" class="h-5 my-5 mr-5 text-white"/> 
    <div>
      <p class="font-bold text-gray-300">{{cardName}}</p>
      <p class="text-white">{{cardStat}}</p>
    </div>   
  </div>
</template>