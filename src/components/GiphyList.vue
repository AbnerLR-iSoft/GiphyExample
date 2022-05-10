<template>
  <ul>
    <li v-for="gif in gifs" :key="gif.id">
     <img :src="gif.images.original.url" :alt="gif.slug" />
     <h3> {{gif.title}} </h3>
    </li>
  </ul>
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
