<template>
  <div class="container">
    <form @submit.prevent="search">
    <label for="giphy-search">Buscar Gif</label>
    <input type="search" id="giphy-search" v-model="buscar">
    <button type="submit">Buscar</button>
  </form>
  <giphy-list v-if="gifs.length > 0" :gifs="gifs"/>
  </div>
</template>
<script>
import GiphyList from '@/components/GiphyList'
export default {
  components: {
    GiphyList
  },
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
