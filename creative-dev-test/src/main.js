import Vue from 'vue';
import App from './App.vue';
// VUE ROUTER
import router from './router';
// VUEX STORE
import store from './store';
// BUMA
import './../node_modules/bulma/css/bulma.css';
import '@/styles.scss';


Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
