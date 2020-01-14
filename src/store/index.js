import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import todosStore from './todosStore'

export default new Vuex.Store({
  strict: true,
  modules: {
    todos: todosStore
  }
})
