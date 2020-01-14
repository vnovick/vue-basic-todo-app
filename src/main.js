import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import BaseButton from '@/components/shared/BaseButton';

Vue.component('BaseButton', BaseButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
