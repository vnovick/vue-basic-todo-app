import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import BaseButton from '@/components/shared/BaseButton';
import store from './store'

Vue.component('BaseButton', BaseButton)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
