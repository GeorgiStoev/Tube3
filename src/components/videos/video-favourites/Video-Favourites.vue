<template>
<div>
    <h1 class="text-center pt-5"><span class="badge badge-danger"><strong>favourites</strong></span></h1>
    <div class="row">
    <Video v-for="video in favourites" v-bind:key="video.id" v-bind:video="video">
    <div class="col-lg-2">
    </div>
    </Video>
    </div>
</div>
</template>

<script>

import VideoService from '../../../services/video/VideoService';
import AuthService from '../../../services/auth/AuthService';
import Video from '../video/Video';

export default {
    name: 'Video-Favourites',
    data: function() {
        return {
            favourites: []
        }   
    },
    created() {
        this.getUserFavourites()
    },
    methods: {
        getUserFavourites() {
            AuthService
                .getCurrentUser()
                .onSnapshot((userRef) => {
                    userRef.forEach((doc) => {
                        doc.data().favourites.forEach((videoId) => {
                            VideoService
                                .getVideoById(videoId)
                                .then((videoDoc) => {
                                    let video = videoDoc.data();
                                    video.id = videoDoc.id;
                                    if(video)
                                    {
                                        this.favourites.push(video);
                                    }
                                });
                        })
                    });
                });
        }
    },
    components: {
        Video
    }
}
</script>

<style scoped>
</style>