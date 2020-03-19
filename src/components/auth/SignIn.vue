<template>
<div>
     <h3 class="text-center text-primary pt-5">Sign In</h3>
    <hr class="w-50 hr-2" />
<form class="mx-auto w-50">
    <div class="form-group">
        <label for="email" class="text-info">Email</label>
        <input name="email" type="email" class="form-control" id="email" placeholder="Email..." v-model="email">
    </div>
    <div class="alert alert-danger text-center">
        Email is required!
    </div>
    <div class="alert alert-danger text-center">
        Email is Invalid!
    </div>
    <div class="form-group">
        <label for="password" class="text-info">Password</label>
        <input name="password" type="password" class="form-control" id="password" placeholder="Password..." v-model="password">
    </div>
    <div class="alert alert-danger text-center">
        Password is required!
    </div>
    <div class="button-holder d-flex justify-content-center">
        <button v-on:click="login" type="submit" class="btn btn-info btn-md align-items-md text-white">Sign In</button>
    </div>
</form>
</div>
</template>

<script>
//import firebase from 'firebase';
import authService from '../../services/AuthService';

export default {
    name: 'SignIn',
    data: function() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        login: function(e) {
            authService.signIn(this.email, this.password);
            // firebase
            //     .auth()
            //     .signInWithEmailAndPassword(this.email, this.password)
            //     .then(user => {
            //         alert(`You are logged in as ${user.email}`);
            //         this.$router.go({ path: this.$router.path });
            //     },
            //     err => {
            //         alert(err.message);
            //     });
            e.preventDefault();
        }
    }
}
</script>