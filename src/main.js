import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' // ����
import Router from 'vue-router'
import router from './router/index'
import store from './store'

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
  vuetify,
    render: h => h(App),
  router: router,
  store
}).$mount('#app')
