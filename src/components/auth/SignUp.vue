<template>
<div>
<h3 class="text-center text-primary pt-5">Sign Up</h3>
<hr class="w-50 hr-2" />
<form class="mx-auto w-50">
    <div class="form-group">
        <label for="firstName" class="text-info">First Name:</label>
        <input name="firstName" type="text" class="form-control" id="firstName" placeholder="FirstName..." v-model="firstName">
    </div>
    <div class="alert alert-danger text-center">
        First name is required!
    </div>
    <div class="form-group">
        <label for="lastName" class="text-info">Last Name:</label>
        <input name="lastName" type="text" class="form-control" id="lastName" placeholder="lastName..." v-model="lastName">
    </div>
    <div class="alert alert-danger text-center">
        Last name is required!
    </div>
    <div>
        <div class="form-group">
            <label for="password" class="text-info">Password</label>
            <input name="password" type="password" class="form-control" id="password" placeholder="Password..." v-model="password">
        </div>
        <div class="alert alert-danger text-center">
            Password is required!
        </div>
        <div class="alert alert-danger text-center">
            Password should be at least 8 characters long and should contain one number,one character and one special character.
        </div>
        <div class="form-group">
            <label for="rePassword" class="text-info">Confirm Password</label>
            <input name="confPassword" type="password" class="form-control" id="confirmPassword" placeholder="Confirm Password...">
        </div>
        <div class="alert alert-danger text-center">
            Confirm Password is required!
        </div>
        <div class="alert alert-danger text-center">
            Passwords do not match!
        </div>
    </div>
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
        <label for="imageUrl" class="text-info">image Url</label>
        <input name="imageUrl" type="text" class="form-control" id="imageUrl" placeholder="imageUrl..." v-model="imageUrl">
    </div>
    <div class="alert alert-danger text-center">
        Image Url is required!
    </div>
    <div class="button-holder d-flex justify-content-center">
        <button v-on:click="register" type="submit" class="btn btn-primary btn-md align-items-md text-white">Sign Up</button>
    </div>
</form>
</div>
</template>

<script>

import authService from '../../services/auth/AuthService';

//import firebase from 'firebase';

export default {
    name: 'SignUp',
    data: function() {
        return { 
            firstName: '',
            lastName: '',
            password: '',
            email: '',
            imageUrl: ''
        };
    },
    methods: {
        register: function(e) {
            authService.signUp(this.email, this.password);
            // firebase
            //     .auth()
            //     .createUserWithEmailAndPassword(this.email, this.password)
            //     .then(user => {
            //         alert(`Account created for ${user.email}`);
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