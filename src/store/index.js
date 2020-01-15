import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import todosStore from "./todosStore";
import counterStore from './counter';


export default new Vuex.Store({
  strict: true,
  modules: {
    counterStore,
    todosStore
  }
});
