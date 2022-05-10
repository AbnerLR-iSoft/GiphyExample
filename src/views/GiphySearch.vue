<template>
  <div class="container">
    <form @submit.prevent="search">
      <label for="giphy-search">Buscar Gif</label>
      <input type="search" id="giphy-search" v-model="buscar" />
      <button type="submit" style="--slist: #0cea2d, #0fa">Buscar</button>
    </form>
    <giphy-list v-if="cargando === false" :gifs="gifs" />
    <app-spinner v-else class="app-spinner" />
  </div>
</template>
<script>
import GiphyList from '@/components/GiphyList'
import NProgress from 'nprogress'
export default {
  components: {
    GiphyList
  },
  data () {
    return {
      buscar: '',
      cargando: false,
      gifs: []
    }
  },
  methods: {
    search () {
      this.cargando = true
      NProgress.start()

      this.axios
        .get(this.ePGiphyS + this.buscar)
        .then((res) => {
          this.gifs = res.data.data
          this.buscar = ''
          this.cargandoGifs()
        })
        .catch((err) => {
          console.error(err)
          this.cargandoGifs()
          this.cargando = null
        })
    },
    cargandoGifs () {
      this.cargando = false
      NProgress.done()
    }
  },
  created () {
    NProgress.configure({
      speed: 200,
      showSpinner: false
    })
  }
}
</script>
<style scoped>
@import "~nprogress/nprogress.css";
.container {
  display: flex;
  flex-direction: column;
}

input {
  padding: 10px;
  background-color: white;
  border: 0.2em solid #20b342;
  border-radius:4px;
  font-size: 15px;
  width: 348px;
  height: 58px;
  transform: skew(-3deg, 1deg);
  text-transform: uppercase;
  margin-right: 40px;
}

button {
  --grad: linear-gradient(to right bottom, var(--slist));
  position: relative;
  margin: 1em auto;
  border: solid 0.2em transparent;
  padding: 0.3em 1.2em;
  border-radius: 9em;
  background: var(--grad) border-box;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font: 700 1.5em/ 1.25 sans-serif;
  text-transform: uppercase;
}

button::before {
  position: absolute;
  z-index: -1;
  inset: -.25em;
  border: inherit;
  border-radius: inherit;
  background: linear-gradient(#000000 0 0) padding-box, var(--grad) border-box;
  content: '';
}

button:hover {
  color: #ffffff;
  text-shadow:
      0 0 7px #fff,
      0 0 10px #ffffff,
      0 0 21px #fffffd,
      0 0 42px #ffffff,
      0 0 82px #fffb00,
      0 0 92px #fffb00,
      0 0 102px #fffb00,
      0 0 151px #fffb00;
}
#nprogress .bar{
  background: #ffffff !important;
}

.app-spinner {
  margin: 130px auto;
}
</style>
