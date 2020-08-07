require('./bootstrap');
import Vue from 'vue'
import App from './app.vue'
import Vuex from 'vuex'
import storeData from './store/index'
import route from './router/index'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify';

// npm install vuex --save
// npm install vue-router --save

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Vuetify); 

const store = new Vuex.Store(storeData)
const router = new VueRouter(route)
const vuetify = new Vuetify()

const vm = new Vue({
    el: '#app',
    store,
    router,
    vuetify,
    render: h => h(App)
})