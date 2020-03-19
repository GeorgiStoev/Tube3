import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue';
import router from './router';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import firebase from 'firebase';
require('firebase/firestore');

/* Paste your firebase configuration below */
const config = {
  apiKey: "AIzaSyAS5M_ptr6wxAnvAo04DCTfzUzXRY4W9P8",
    authDomain: "tube-3-a7503.firebaseapp.com",
    databaseURL: "https://tube-3-a7503.firebaseio.com",
    projectId: "tube-3-a7503",
    storageBucket: "tube-3-a7503.appspot.com",
    messagingSenderId: "324500069914",
    appId: "1:324500069914:web:3b4ae932c29f46b3537ba3",
    measurementId: "G-06JV2PBEDD"
};

/* Initialize firebase with your configuration */
firebase.initializeApp(config);

/* Bind firebase to your Vue instance */
Vue.prototype.$firebase = firebase;

Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
