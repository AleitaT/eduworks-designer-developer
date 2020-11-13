import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        dummyObject: {
            name: '',
            addres: ''
        }
    },
    mutations: {
        setDummyObjet(state, val) {
            state.dummyObject = val;
        }
    },
    actions: {
    },
    getters: {
        dummyObject(state) {
            return state.dummyObject;
        }
    },
    modules: {
    }
});
