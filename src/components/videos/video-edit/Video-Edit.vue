<template>
  <div>
    <h3 class="text-center text-primary pt-5">Edit Video</h3>
    <hr class="w-50 hr-2" />
    <form class="mx-auto w-50">
      <div class="form-group">
        <label for="name" class="text-info">Name</label>
        <input
          name="name"
          type="name"
          class="form-control"
          id="name"
          v-model="name"
          @blur="$v.name.$touch"
        />
      </div>
      <template v-if="$v.name.$error">
        <div v-if="!$v.name.required" class="alert alert-danger text-center">Name is required!</div>
        <div v-if="!$v.name.minLength" class="alert alert-danger text-center">Name is too short!</div>
      </template>
      <div class="form-group">
        <label for="category" class="text-info">Category:</label>
        <select
          name="category"
          class="form-control text-primary"
          id="category"
          for="Category"
          v-model="category"
          @blur="$v.category.$touch"
        >
          <option>--- Select Video Category ---</option>
          <option>Music</option>
          <option>News</option>
          <option>Sport</option>
        </select>
      </div>
      <template v-if="$v.category.$error">
        <div
          v-if="!$v.category.required"
          class="alert alert-danger text-center"
        >Categoty is required!</div>
      </template>
      <div class="form-group">
        <label for="videoUrl" class="text-info">Video Url</label>
        <input
          name="videoUrl"
          type="name"
          class="form-control"
          id="videoUrl"
          v-model="videoUrl"
          @blur="$v.videoUrl.$touch"
        />
      </div>
      <template v-if="$v.videoUrl.$error">
        <div
          v-if="!$v.videoUrl.required"
          class="alert alert-danger text-center"
        >Video Url is required!</div>
      </template>
      <div class="button-holder d-flex justify-content-center">
        <button
          v-on:click="edit"
          type="submit"
          class="btn btn-primary btn-md align-items-md text-white"
          :disabled="!name || !category || !videoUrl"
        >Edit</button>
      </div>
    </form>
  </div>
</template>

<script>
import VideoService from "../../../services/video/VideoService";
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "Video-Edit",
  mixins: [validationMixin],
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
  validations: {
    name: {
      required,
      minLength: minLength(3)
    },
    category: {
      required
    },
    videoUrl: {
      required
    }
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