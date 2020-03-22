import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue';
import router from './router';
import firebaseConfig from './firebase/firebaseConfig';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css'
import firebase from 'firebase';

require('firebase/firestore');
firebase.initializeApp(firebaseConfig);
Vue.prototype.$firebase = firebase;

const db = firebase.firestore();

 const videosCollection = db.collection('videos');
 videosCollection
  .onSnapshot((videoRef) => {
    const videos = [];
    videoRef.forEach((doc) => {
      const video = doc.data();
      video.id = doc.id;
      console.log(video);
      videos.push(video);
    })
  })

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

