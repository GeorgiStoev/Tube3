import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue';
import router from './router';
import firebaseConfig from './firebase/firebaseConfig';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css'
import firebase from 'firebase';
import Vuelidate from 'vuelidate'

import "../node_modules/bootswatch/dist/lumen/bootstrap.min.css";

require('firebase/firestore');
firebase.initializeApp(firebaseConfig);
Vue.prototype.$firebase = firebase;


Vue.use(BootstrapVue);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

let app;
firebase
  .auth()
  .onAuthStateChanged(() => {
    if (!app) {
      app = new Vue({
        router,
        render: h => h(App),
      }).$mount('#app')

    }
  });

