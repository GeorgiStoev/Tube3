<template>
    <div class="card" style="width: 17rem;">
  <iframe :src="video.videoUrl" width="270" height="250" frameborder="0" webkitallowfullscreen mozallowfullscreen
            allowfullscreen></iframe>
  <div class="card-body">
    <h5 class="card-title"><strong>{{video.name}}</strong></h5>
    <router-link v-if="!isLoggedIn" class="routerLink" to="/signin">
           <a class="btn btn-secondary">Watch Video</a>
     </router-link>
    <router-link v-if="isLoggedIn" class="routerLink" :to="{ name: 'Video-Watch', params: { videoId: video.id } }">
           <a class="btn btn-outline-primary">Watch Video</a>
     </router-link>
  </div>
</div>
</template>

<script>
import firebase from 'firebase';
export default {
    name: 'Video',
    props: [ 'video' ],
    data: function() {
        return {
             isLoggedIn: false
            // videoUrl: this.video.videoUrl.replace('watch?v=', 'embed/')
        };
    },
    methods: {
        
    },
    created() {
      if(firebase.auth().currentUser) {
        this.isLoggedIn = true;
      }
    }
}
</script>

<style scoped>

</style>