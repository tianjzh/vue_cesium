import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 全局引用Cesium
import * as Cesium from 'cesium/Cesium.js'
import 'cesium/Widgets/widgets.css'
// 注册全局变量
Vue.prototype.Cesium = Cesium
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
