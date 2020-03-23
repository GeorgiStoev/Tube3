<template>
<div>
    <div class="text-center pt-3">
        <iframe :src="video.videoUrl" width="1000" height="500" frameborder="0" webkitallowfullscreen mozallowfullscreen
        allowfullscreen crossorigin="anonymous"></iframe>
        <h4 class="text-center pt-2" style="color:black;"><strong>{{video.name}}</strong></h4>
      <div class="row justify-content-around">
        <div class="col-5 pt-1 m-1">
            <img :src="uploader.imageUrl" width="75" height="75" class="rounded-circle rounded mx-auto d-block" />
            <span class="badge badge-primary">{{uploader.firstName + "  " + uploader.lastName}}</span>
        </div>
        <div class="col-5 pt-2">
           
                <i class="fas fa-grip-horizontal fa-3x pointer" style="color: #33ddff;"></i>
                <i class="far fa-trash-alt fa-3x pointer" style="color:#FF0000;"></i>
           
        </div>
        <div class="col-5 pt-3 m-1">
            <i class="fas fa-heart fa-3x pointer" style="color:#FF0000;"></i>
        </div>
    </div>
    </div>
</div>
</template>

<script>

import VideoService from '../../../services/video/VideoService';
import AuthService from '../../../services/auth/AuthService';
//import firebase from 'firebase';
export default {
    name: 'Video-Watch',
    data: function() {
        return {
            uploader: {},
            video:{}
        }   
    },
    created() {
        VideoService
            .getVideoById(this.$route.params.videoId)
            .then((doc) => {
                this.video = doc.data();
                AuthService
                    .getUserById(this.video.uploaderId)
                    .onSnapshot((userRef) => {
                        userRef.forEach((doc) => {
                            this.uploader = doc.data();
                        });
                    });
            });
    },
    methods: {
        
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