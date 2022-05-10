import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

const giphyApp = createApp(App)
giphyApp.use(router)
giphyApp.use(VueAxios, axios)

giphyApp.config.globalProperties.ePGiphyS = 'https://api.giphy.com/v1/gifs/search?api_key=T8g9QQkwsLC3nmDwk0R2GR7z7E2DTLc2&q='

const requireComponent = require.context('./components', true, /App[A-Z]\w+\.(vue|js)$/)
requireComponent.keys().forEach(function (fileName) {
  let baseComponentConfig = requireComponent(fileName)
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig
  const baseComponentName = baseComponentConfig.name || (
    fileName
      .replace(/^.+\//, '')
      .replace(/\.\w+$/, '')
  )
  giphyApp.component(baseComponentName, baseComponentConfig)
})

giphyApp.mount('#app')
