<template>
  <div>
    <h3 class="text-center text-primary pt-5">Sign In</h3>
    <hr class="w-50 hr-2" />
    <form class="mx-auto w-50">
      <div class="form-group">
        <label for="email" class="text-info">Email</label>
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
        <label for="password" class="text-info">Password</label>
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
      <div class="button-holder d-flex justify-content-center">
        <button
          v-on:click="login"
          type="submit"
          class="btn btn-primary btn-md align-items-md text-white"
          :disabled="!email || !password"
        >Sign In</button>
      </div>
    </form>
  </div>
</template>

<script>
import authService from "../../services/auth/AuthService";
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  name: "SignIn",
  mixins: [validationMixin],
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    login: function(e) {
      authService.signIn(this.email, this.password);
      e.preventDefault();
    }
  }
};
</script>