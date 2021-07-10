import Vue from 'vue'
import App from './App.vue'
import url from './api/api'
import router from "./router/index";
import store from './store/index'

Vue.config.productionTip = false
Vue.prototype.$url = url;
Vue.prototype.$axios = axios

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
