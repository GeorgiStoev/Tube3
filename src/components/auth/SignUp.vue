<template>
  <div>
    <h3 class="text-center text-primary pt-5">Sign Up</h3>
    <hr class="w-50 hr-2" />
    <form class="mx-auto w-50">
      <div class="form-group">
        <span class="badge badge-primary">First Name</span>
        <input
          name="firstName"
          type="text"
          class="form-control"
          id="firstName"
          placeholder="FirstName..."
          v-model="firstName"
          @blur="$v.firstName.$touch"
        />
      </div>
      <template v-if="$v.firstName.$error">
        <div
          v-if="!$v.firstName.required"
          class="alert alert-danger text-center"
        >First name is required!</div>
        <div
          v-if="!$v.firstName.minLength"
          class="alert alert-danger text-center"
        >First name is too short!</div>
        <div
          v-if="!$v.firstName.maxLenght"
          class="alert alert-danger text-center"
        >First name is too long!</div>
      </template>
      <div class="form-group">
        <span class="badge badge-primary">Last Name</span>
        <input
          name="lastName"
          type="text"
          class="form-control"
          id="lastName"
          placeholder="lastName..."
          v-model="lastName"
          @blur="$v.firstName.$touch"
        />
      </div>
      <template v-if="$v.firstName.$error">
        <div
          v-if="!$v.lastName.required"
          class="alert alert-danger text-center"
        >Last name is required!</div>
        <div
          v-if="!$v.lastName.minLength"
          class="alert alert-danger text-center"
        >Last name is too short!</div>
        <div
          v-if="!$v.lastName.maxLenght"
          class="alert alert-danger text-center"
        >Last name is too long!</div>
      </template>
      <div>
        <div class="form-group">
          <span class="badge badge-primary">Password</span>
          <input
            name="password"
            type="password"
            class="form-control"
            id="password"
            placeholder="Password..."
            v-model="password"
            @blur="$v.password.$touch"
          />
        </div>
        <template v-if="$v.password.$error">
          <div
            v-if="!$v.password.required"
            class="alert alert-danger text-center"
          >Password is required!</div>
          <div
            v-else-if="!$v.password.minLength"
            class="alert alert-danger text-center"
          >Password must have at least 6 letters!</div>
        </template>
        <div class="form-group">
          <span class="badge badge-primary">Confirm Password</span>
          <input
            name="confPassword"
            type="password"
            class="form-control"
            id="confirmPassword"
            placeholder="Confirm Password..."
            v-model="confPassword"
            @blur="$v.confPassword.$touch"
          />
        </div>
        <template v-if="$v.confPassword.$error">
          <div
            v-if="!$v.confPassword.sameAs"
            class="alert alert-danger text-center"
          >Confirm Password does not match password!</div>
        </template>
      </div>
      <div class="form-group">
        <span class="badge badge-primary">Email</span>
        <input
          name="email"
          type="email"
          class="form-control"
          id="email"
          placeholder="Email..."
          v-model="email"
          @blur="$v.email.$touch"
        />
      </div>
      <template v-if="$v.email.$error">
        <div v-if="!$v.email.required" class="alert alert-danger text-center">Email is required!</div>
        <div v-else-if="!$v.email.email" class="alert alert-danger text-center">Email is invalid!</div>
      </template>
      <div class="form-group">
        <span class="badge badge-primary">Image Url</span>
        <input
          name="imageUrl"
          type="text"
          class="form-control"
          id="imageUrl"
          placeholder="imageUrl..."
          v-model="imageUrl"
          @blur="$v.imageUrl.$touch"
        />
      </div>
      <template v-if="$v.imageUrl.$error">
        <div
          v-if="!$v.imageUrl.required"
          class="alert alert-danger text-center"
        >Image Url is required!</div>
      </template>
      <div class="button-holder d-flex justify-content-center">
        <button
          v-on:click="register"
          type="submit"
          class="btn btn-primary btn-md align-items-md text-white"
          :disabled="!firstName || !lastName || !password || !confPassword || !email || !imageUrl"
        >Sign Up</button>
      </div>
    </form>
  </div>
</template>

<script>
import authService from "../../services/auth/AuthService";
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  sameAs,
  email
} from "vuelidate/lib/validators";

export default {
  name: "SignUp",
  mixins: [validationMixin],
  data: function() {
    return {
      firstName: "",
      lastName: "",
      password: "",
      confPassword: "",
      email: "",
      imageUrl: ""
    };
  },
  validations: {
    firstName: {
      required,
      minLength: minLength(3),
      maxLenght: maxLength(16)
    },
    lastName: {
      required,
      minLength: minLength(3),
      maxLenght: maxLength(16)
    },
    password: {
      required,
      minLength: minLength(6)
    },
    confPassword: {
      sameAs: sameAs("password")
    },
    email: {
      required,
      email
    },
    imageUrl: {
      required
    }
  },
  methods: {
    register: function(e) {
      authService.signUp(
        this.firstName,
        this.lastName,
        this.imageUrl,
        this.email,
        this.password
      );
      e.preventDefault();
    }
  }
};
</script> 