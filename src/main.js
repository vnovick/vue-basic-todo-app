import Vue from 'vue'
import App from './App.vue'
import 'animate.css/animate.css'
import logger from './plugins/logger';
import store from './store'
import BaseButton from '@/components/shared/BaseButton';
import VueCompositionApi from '@vue/composition-api';
 
Vue.use(VueCompositionApi);

Vue.config.productionTip = false

Vue.use(logger)
Vue.component('BaseButton', BaseButton)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
