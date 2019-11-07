import Vue from "vue";
import Vuex from "vuex";
import article from "./modules/article";

const modules = { article };

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules
});
