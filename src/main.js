import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import VueSplide from '@splidejs/vue-splide';


import './assets/js/youtube.js'

Vue.use( VueSplide );
import { Splide, SplideSlide } from '@splidejs/vue-splide';
export default {
  components: {
    Splide,
    SplideSlide,
  },
}

require('@/assets/styles/material-kit.css')

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
