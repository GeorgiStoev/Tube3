<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <router-link class="routerLink" to="/">
  <i class="fab fa-youtube fa-4x pointer" style="color:white;"></i>
  </router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav ml-auto">
        <li v-if="!isLoggedIn" class="nav-item">
          <router-link class="routerLink" to="/signin">
            <a class="nav-link">Sign In</a>
          </router-link>
        </li>
        <li v-if="!isLoggedIn" class="nav-item">
          <router-link class="routerLink" to="/signup">
            <a class="nav-link">Sign Up</a>
          </router-link>
        </li>
    </ul>
       <ul v-if="isLoggedIn" class="navbar-nav ml-auto">
        <li class="nav-item">
          <i><router-link class="routerLink" to="">
            <i class="fab fa-searchengin fa-3x" style="color:darkorange;"></i>
          </router-link></i>
          <i><router-link class="routerLink" to="/video-create">
            <i class="fas fa-plus-square fa-3x pointer" style="color:white;"></i>
          </router-link></i>
          <i><router-link class="routerLink" to="">
            <i class="fas fa-heart fa-3x pointer" style="color:#FF0000;"></i>
          </router-link></i>
          <i><router-link class="routerLink" to="">
           <i class="fas fa-user fa-3x pointer" style="color:black;"></i>
          </router-link></i>
          <i v-on:click="logout" class="da fas fa-sign-out-alt fa-3x pointer"></i>
        </li>
      </ul>
  </div>
</nav>
</template>

<script>
import authService from '../../services/auth/AuthService';

import firebase from 'firebase';
export default {
    name: 'navbar',
    data() {
      return {
        isLoggedIn: false,
        currentUser: false
      };
    },
    created() {
      if(firebase.auth().currentUser) {
        this.isLoggedIn = true;
        this.currentUser = firebase.auth().currentUser.email;
      }
    },
    methods: {
      logout: function() {
      authService.signOut();
        // firebase
        //   .auth()
        //   .signOut()
        //   .then(() => {
        //     this.$router.go({ path: this.$router.path });
        //   });
      }
    }
}
</script>

<style scoped>
  i + i {
      margin-left: 40px;
  }

  .pointer {
      cursor: pointer;
  }
</style>