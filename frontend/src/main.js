import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './modules'
import vuetify from './plugins/vuetify';
import VueLocalForage from 'vue-localforage'

Vue.use(VueLocalForage);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
