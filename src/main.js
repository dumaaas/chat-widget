import Vue from 'vue'
import App from './App.vue'
import './style.css'
var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo, {
  container: "#section-container",
  duration: 700,
  easing: "ease-in-out",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
