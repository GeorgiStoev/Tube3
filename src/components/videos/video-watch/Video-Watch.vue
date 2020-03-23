<template>
<div>
    <h1>{{$route.params.videoId}}</h1>
    <h1 v-if="this.video">{{video.name}}</h1>
        <h1 v-if="this.video">{{video.videoUrl}}</h1>


</div>
</template>

<script>

import VideoService from '../../../services/video/VideoService';

export default {
    name: 'Video-Watch',
    data: function() {
        return {
            id: ' ',
            video:{}
        }   
    },
    created() {
        this.video = VideoService.getVideoById(this.$route.params.videoId)
        .then((doc) => {
            if (doc.exists) {
                    this.video = doc.data()
                } else {
                    alert("No such Video");
                }
        });
    },
    methods: {
        
    }
}
</script>

<style scoped>

</style>