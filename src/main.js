import Vue from 'vue'
import App from './App.vue'

require("./utils/imports");

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')