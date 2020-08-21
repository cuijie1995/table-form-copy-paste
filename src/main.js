import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// import 

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import PuzzleVerification from 'vue-puzzle-verification'

Vue.config.productionTip = false



Vue.use(ElementUI);
Vue.use(PuzzleVerification)





new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
