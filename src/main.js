import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' // ����
import Router from 'vue-router'
import router from './router/index'
import store from './store'
 import fb from 'firebase'

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
  vuetify,
    render: h => h(App),
  router: router,
  store,
  created(){
    const firebaseConfig = {
      apiKey: "AIzaSyBcue2WdhDUVMTkbgKpMrrvCJ0YQuile7Y",
      authDomain: "add-pro-db819.firebaseapp.com",
      projectId: "add-pro-db819",
      storageBucket: "add-pro-db819.appspot.com",
      messagingSenderId: "710158854213",
      appId: "1:710158854213:web:59e963b461ca9264e49b2c",
      measurementId: "G-68F3FGFE0P"
    };
  // Initialize Firebase
    fb.initializeApp(firebaseConfig);
    fb.analytics();
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
  
  
    })
    this.$store.dispatch('fetchAds')

  }

}).$mount('#app')
