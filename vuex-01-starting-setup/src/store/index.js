import { createStore } from 'vuex';
import rootMutations from '@/store/mutations';
import rootActions from '@/store/actions';
import rootGetters from '@/store/getters';
import counterModule from '@/store/counter';
const store = createStore({
  modules: {
    counter: counterModule,
  },
  state() {
    return {
      isLogged: false,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
