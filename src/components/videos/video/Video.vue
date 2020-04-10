<template>
  <div class="card" style="width: 17.5rem;">
    <iframe
      :src="videoUrl"
      width="278"
      height="250"
      frameborder="0"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen
    ></iframe>
    <div class="card-body">
      <h5 class="card-title">
        <strong>{{name}}</strong>
      </h5>
      <router-link v-if="!isLoggedIn" class="routerLink" to="/signin">
        <a class="btn btn-secondary">Watch Video</a>
      </router-link>
      <router-link
        v-if="isLoggedIn"
        class="routerLink"
        :to="{ name: 'Video-Watch', params: { videoId: id } }"
      >
        <a class="btn btn-outline-primary">Watch Video</a>
      </router-link>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Video",
  props: {
    id: String,
    name: String,
    videoUrl: String
  },
  data: function() {
    return {
      isLoggedIn: false
    };
  },
  methods: {},
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
    }
  }
};
</script>

<style scoped>
</style>