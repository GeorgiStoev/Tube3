<template>
  <div>
    <h3 class="text-center text-primary pt-5">Add Video</h3>
    <hr class="w-50 hr-2" />
    <form class="mx-auto w-50">
      <div class="form-group">
        <label for="name" class="text-info">Name</label>
        <input
          name="name"
          type="name"
          class="form-control"
          id="name"
          placeholder="Name..."
          v-model="name"
        />
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
          <option value selected disabled>--- Select Video Category ---</option>
          <option>Music</option>
          <option>News</option>
          <option>Sport</option>
        </select>
      </div>
      <div class="alert alert-danger text-center">Category is required!</div>
      <div class="form-group">
        <label for="videoUrl" class="text-info">Video Url</label>
        <input
          name="videoUrl"
          type="name"
          class="form-control"
          id="videoUrl"
          placeholder="Video Url..."
          v-model="videoUrl"
        />
      </div>
      <div class="alert alert-danger text-center">Video Url is required!</div>
      <div class="button-holder d-flex justify-content-center">
        <button
          v-on:click="add"
          type="submit"
          class="btn btn-primary btn-md align-items-md text-white"
        >Add</button>
      </div>
    </form>
  </div>
</template>

<script>
import VideoService from "../../../services/video/VideoService";

export default {
  name: "Video-Create",
  data: function() {
    return {
      name: "",
      category: "",
      videoUrl: ""
    };
  },
  methods: {
    add: function(e) {
      VideoService.add(this.name, this.category, this.videoUrl);
      e.preventDefault();
    }
  }
};
</script>

<style scoped>
</style>