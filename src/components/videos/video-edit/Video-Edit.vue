<template>
  <div>
    <h3 class="text-center text-primary pt-5">Edit Video</h3>
    <hr class="w-50 hr-2" />
    <form class="mx-auto w-50">
      <div class="form-group">
        <label for="name" class="text-info">Name</label>
        <input name="name" type="name" class="form-control" id="name" v-model="name" />
      </div>
      <div class="alert alert-danger text-center">Name is required!</div>
      <div class="form-group">
        <label for="category" class="text-info">Category:</label>
        <select
          name="category"
          class="form-control text-primary"
          id="category"
          for="Category"
          v-model="category"
        >
          <option>--- Select Video Category ---</option>
          <option>Music</option>
          <option>News</option>
          <option>Sport</option>
        </select>
      </div>
      <div class="alert alert-danger text-center">Category is required!</div>
      <div class="form-group">
        <label for="videoUrl" class="text-info">Video Url</label>
        <input name="videoUrl" type="name" class="form-control" id="videoUrl" v-model="videoUrl" />
      </div>
      <div class="alert alert-danger text-center">Video Url is required!</div>
      <div class="button-holder d-flex justify-content-center">
        <button
          v-on:click="edit"
          type="submit"
          class="btn btn-primary btn-md align-items-md text-white"
        >Edit</button>
      </div>
    </form>
  </div>
</template>

<script>
import VideoService from "../../../services/video/VideoService";

export default {
  name: "Video-Edit",
  data: function() {
    return {
      video: {},
      name: " ",
      category: " ",
      videoUrl: " "
    };
  },
  created() {
    this.getVideo();
  },
  methods: {
    edit: function(e) {
      this.video.name = this.name;
      this.video.category = this.category;
      this.video.videoUrl = this.videoUrl;
      VideoService.updateVideo(this.$route.params.videoId, this.video);

      e.preventDefault();
    },
    getVideo() {
      VideoService.getVideoById(this.$route.params.videoId).then(doc => {
        this.name = doc.data().name;
        this.category = doc.data().category;
        this.videoUrl = doc.data().videoUrl;
        this.video = doc.data();
      });
    }
  }
};
</script>

<style scoped>
</style>