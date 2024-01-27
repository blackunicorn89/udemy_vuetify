import counterMutations from '@/store/counter/mutations';
import counterActions from '@/store/counter/actions';
import counterGetters from '@/store/counter/getters';
const counterModule = {
  namespaced: true,
  state() {
    return { counter: 0 };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters,
};
export default counterModule;
