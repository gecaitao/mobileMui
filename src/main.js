import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Vant from 'vant'
import '@vant/touch-emulator'
import VueLazyload from 'vue-lazyload'
import 'lib-flexible'

import 'vant/lib/index.css'

Vue.use(Vant)
Vue.use(VueLazyload)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
