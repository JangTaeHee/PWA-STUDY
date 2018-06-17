import Vue from 'vue'
import Vewx from 'vuex'
import router from './router.js'
import store  from './store/index.js'
import ChartPlugin from './chart-plugin.js'

Vue.use(ChartPlugin);

new Vue({
  //el: '#app',
  router,
  store,
  created() {
    this.$store.commit('setMessage', 'Change vuex');
  }
  //render: h => h(App)
}).$mount('#app')
