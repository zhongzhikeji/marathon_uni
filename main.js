import Vue from 'vue'
import App from './App'
 import Auth from './libs/wechat';
 import Cache from './utils/cache'
 import util from 'utils/util'
Vue.prototype.$wechat = Auth;
Vue.prototype.$util = util;
Vue.prototype.$Cache = Cache;
// 引入全局uView
import uView from '@/uni_modules/uview-ui'

// vuex
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$store = store



App.mpType = 'app'
Vue.use(uView)

const app = new Vue({
	store,
	...App
})



app.$mount()
