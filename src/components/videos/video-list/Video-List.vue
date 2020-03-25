<template>
<div>
    <h2><span class="badge badge-primary"><strong>Music</strong></span></h2>
    <div class="row">
    <Video v-for="video in music" v-bind:key="video.id" v-bind:video="video">
    <div class="col-lg-2">
    </div>
    </Video>
    </div>
    <h2><span class="badge badge-warning"><strong>News</strong></span></h2>
    <div class="row">
    <Video v-for="video in news" v-bind:key="video.id" v-bind:video="video">
    <div class="col-lg-2">
    </div>
    </Video>
    </div>
    <h2><span class="badge badge-danger"><strong>Sport</strong></span></h2>
    <div class="row">
    <Video v-for="video in sport" v-bind:key="video.id" v-bind:video="video">
    <div class="col-lg-2">
    </div>
    </Video>
    </div>
</div>
</template>

<script>

import videoService from '../../../services/video/VideoService';
import Video from '../video/Video';

export default {
    name: 'Video-List',
    data: function() {
        return {
            music: videoService.listByCategory('Music'),
            news: videoService.listByCategory('News'),
            sport: videoService.listByCategory('sport')
        };
    },
    methods: {
    },
    components: {
        Video
    }
}
</script>

<style scoped>

</style>