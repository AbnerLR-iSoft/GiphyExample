<template>
  <form @submit.prevent="search">
    <label for="giphy-search">Buscar Gif</label>
    <input type="search" id="giphy-search" v-model="buscar">
    <button type="submit">Buscar</button>
  </form>
  <div v-for="gif in gifs" :key="gif.id">
    <h3> {{gif.title}} </h3>
    <img :src="gif.images.original.url" :alt="gif.slug" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      buscar: '',
      gifs: []
    }
  },
  methods: {
    search () {
      this.axios.get(this.ePGiphyS + this.buscar)
        .then((res) => {
          this.gifs = res.data.data
          this.buscar = ''
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }
}
</script>
