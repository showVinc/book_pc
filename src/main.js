// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import store from '@/store/index'
import Axios from '@/plugin/axios'
import '@/assets/css/app.less'
import Moment from 'moment'
import fun from '@/plugin/main'

import UserComponent from '@/components/index'

Vue.use(UserComponent)

Vue.use(MintUI)

//挂载js
Vue.prototype.$http = Axios
Vue.prototype.$fun = fun
//挂载时间
Vue.prototype.$moment = Moment

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
