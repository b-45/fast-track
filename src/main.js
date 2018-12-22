import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueFrappe from 'vue2-frappe';
import Trend from 'vuetrend';

Vue.use(Trend);
Vue.use(VueFrappe);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')