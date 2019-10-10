import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './routes'
import App from './App.vue'
import VueNotifications from 'vue-notifications'
import miniToastr from 'mini-toastr'

// Notifications
miniToastr.init({types: {success: 'success', error: 'error', info: 'info', warn: 'warn'}})
function toast ({title, message, type, timeout, cb}) {
    if (type == 'error') timeout = 100000000000
    return miniToastr[type](message, title, timeout, cb)
}
Vue.use(VueNotifications, {success: toast, error: toast, info: toast, warn: toast})
// End Notifications

Vue.use(VueRouter)
Vue.use(VueResource)

var router = new VueRouter({mode: 'history', routes: routes, linkActiveClass: 'active'})
new Vue(Vue.util.extend({ router }, App)).$mount('#app')
