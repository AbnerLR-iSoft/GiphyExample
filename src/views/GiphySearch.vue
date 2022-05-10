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
      console.log(this.buscar)
      this.buscar = ''
    }
  }
}
</script>
