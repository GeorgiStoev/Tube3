import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue';
import router from './router';
import firebaseConfig from './firebase/firebaseConfig';
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@fortawesome/fontawesome-free/css/all.css'
//import '@fortawesome/fontawesome-free/js/all.js'
import firebase from 'firebase';

require('firebase/firestore');
firebase.initializeApp(firebaseConfig);
Vue.prototype.$firebase = firebase;

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

let app;
firebase
  .auth()
  .onAuthStateChanged(() => {
    if(!app) {
      app = new Vue({
        router,
        render: h => h(App),
      }).$mount('#app')
      
    }
  });

