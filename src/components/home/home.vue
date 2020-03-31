<template>
  <div>
    <div class="jumbotron">
      <div class="page-header">
        <div class="pull-left">
          <template v-if="!isLoggedIn">
            <h2 class="display-3 text-muted">Welcome, Guest!</h2>
          </template>
          <template v-if="isLoggedIn">
            <h2 class="display-3 text-muted">Welcome, {{names}}!</h2>
          </template>
        </div>
        <div class="clearfix">
          <h3 class="text-info">
            Want to see Tube1?
            <a
              class="nav-link active"
              href="http://georgis-001-site1.dtempurl.com/"
            >Click Here</a>
          </h3>
        </div>
      </div>
    </div>
    <Video-List />
  </div>
</template>

<script>
import authService from "../../services/auth/AuthService";
import VideoList from "../videos/video-list/Video-List";

import firebase from "firebase";
export default {
  data() {
    return {
      names: "",
      isLoggedIn: false
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.getNames();
    }
  },
  components: {
    VideoList
  },
  methods: {
    getNames() {
      authService
        .getUserById(firebase.auth().currentUser.uid)
        .onSnapshot(userRef => {
          userRef.forEach(doc => {
            this.names = doc.data().firstName + " " + doc.data().lastName;
          });
        });
    }
  }
};
</script>

<style scoped>
</style>