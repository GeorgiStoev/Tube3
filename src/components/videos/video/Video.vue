<template>
    <div class="card">
        <iframe :src="videoUrl" width="254" height="250" frameborder="0" webkitallowfullscreen mozallowfullscreen
            allowfullscreen></iframe>
        <div class="card-body">
           <h5 class="card-title"><strong>{{video.name}}</strong></h5>
            <!-- <ng-template [ngIf]="!isAuth"> -->
                <button type="button" class="btn btn-outline-danger">play</button>
            <!-- </ng-template> -->
            <!-- <ng-template [ngIf]="isAuth">
                <button type="button" class="btn btn-outline-danger" [routerLink]="['/video/watch', video.id]">play</button>
            </ng-template> -->
        </div>
    </div>
</template>

<script>

export default {
    name: 'Video',
    props: [ 'video'],
    data: function() {
        return {
            videoUrl: this.video.videoUrl.replace('watch?v=', 'embed/')
        };
    },
    methods: {
        
    }
}
</script>

<style scoped>

</style>