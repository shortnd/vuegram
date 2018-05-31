import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from "./store.js";
const firebase = require('./firebaseConfig.js')

Vue.config.productionTip = false

// handle page reloads
let app
firebase.authentication.onAuthStateChanged(user => {
  if (!app) {
    new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App)
    })
  }
})
