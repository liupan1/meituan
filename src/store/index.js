import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    position: {

    },
    username: '',
  },
  mutations: {
    setPosition(state, data) {
      state.position = data;
    },
  },
  actions: {
    setPosition({ commit }, data) {
      commit('setPosition', data);
    },
  },
  modules: {
  },
});
