<template>
  <ul>
    <li v-for="gif in gifs" :key="gif.id">
     <img :src="gif.images.original.url" :alt="gif.slug" />
     <h3 class="item-content"> {{gif.title}} </h3>
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
<style scoped>
ul {
    width: 800px;
    margin: 60px auto 48px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px 30px;
}

li:nth-of-type(3n) {
    grid-column: 1 / span 2;
}

li {
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 6px;
    border: 0.2em solid #000000;
    box-shadow: 0 0 7px #fff,
      0 0 10px #19ff0da7,
      0 0 21px  #ff26a5b5,
      0 0 32px #FF26A5;
    overflow: hidden;
}

li img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.item-content {
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
