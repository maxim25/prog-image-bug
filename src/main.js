import Vue from 'vue'
import App from './App.vue'
import VueProgressiveImage from 'vue-progressive-image'

Vue.use(VueProgressiveImage,
  {
    // delay: 2000 // 2 seconds before the image is displayed
  })

new Vue({
  el: '#app',
  render: h => h(App)
})
