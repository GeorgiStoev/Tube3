<template>
<div>
    <div class="center pt-5">
        <img :src="user.imageUrl" width="255" height="235" class="rounded-circle rounded mx-auto d-block" />
    </div>
    <div class="text-center pt-3">
        <h1><span class="badge badge-danger"><strong>{{user.firstName + " " +  user.lastName}}</strong></span></h1>
        <span class="border-top border-bottom">{{user.email}}</span>
    </div>
        <h2 class="text-center pt-3" ><span class="badge badge-primary"><strong>My Videos</strong></span></h2>
        <!-- <div class="row">
        <Video v-for="video in music" v-bind:key="video.id" v-bind:video="video">
        <div class="col-lg-2">
        </div>
        </Video>
        </div> -->
</div>
</template>

<script>

import AuthService from '../../services/auth/AuthService';


export default {
    name: 'User-Profile',
    data: function() {
        return {
            user: {}
        };
    },
    created() {
        this.getUser()
    },
    methods: {
        getUser() {
            AuthService
                .getCurrentUser()
                .onSnapshot((userRef) => {
                    userRef.forEach((doc) => {
                        this.user = doc.data();
                    });
                });
        }
    },
    components: {
        
    }
}
</script>

<style scoped>

</style>