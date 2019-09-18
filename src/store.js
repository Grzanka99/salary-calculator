import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currData: [
      {
        id: 1,
        for: 'Strona internetowa',
        time: 30,
        rate: 35,
        info: undefined,
      },
      {
        id: 2,
        for: 'Ikonki',
        time: 105,
        rate: 25,
        info: 'poprawić to i tamto',
      },
    ],
  },
  mutations: {},
  actions: {},
});
