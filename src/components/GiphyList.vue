<template>
  <div v-for="gif in gifs" :key="gif.id">
    <h3> {{gif.title}} </h3>
    <img :src="gif.images.original.url" :alt="gif.slug" />
  </div>
</template>
<script>
export default {
  props: {
    gifs: {
      required: true,
      type: Array
    }
  }
}
</script>
