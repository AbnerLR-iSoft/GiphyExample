<template>
  <form @submit.prevent="search">
    <label for="giphy-search">Buscar Gif</label>
    <input type="search" id="giphy-search" v-model="buscar">
    <button type="submit">Buscar</button>
  </form>
</template>
<script>
export default {
  data () {
    return {
      buscar: ''
    }
  },
  methods: {
    search () {
      this.axios.get(this.ePGiphyS + this.buscar)
        .then((res) => {
          console.log(res.data)
          this.buscar = ''
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }
}
</script>
