import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
const eventBus=new Vue();
export default eventBus;
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
