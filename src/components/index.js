import Head from '@/components/Head_public'
import Foot from '@/components/Foot_public'
import Nav from '@/components/Nav_public'

// 导出组件
export default {
  install: function (Vue) {
    Vue.component('head-public', Head)    //  公共头部
    Vue.component('foot-public', Foot)    //  公共底部
    Vue.component('nav-public', Nav)    //  公共導航
  }
}
