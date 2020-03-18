<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <router-link class="routerLink" to="/">
  <i class="fab fa-youtube fa-4x pointer" style="color:white;"></i>
  </router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="routerLink" to="/signin">
            <a class="nav-link">Sign In</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="routerLink" to="/signup">
            <a class="nav-link">Sign Up</a>
          </router-link>
        </li>
    </ul>
      <!-- <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <i class="fab fa-searchengin fa-3x" style="color:darkorange;" routerLink="/video/search"></i>
          <i class="fas fa-plus-square fa-3x pointer" routerLink="video/create"></i>
          <i class="fas fa-heart fa-3x pointer" style="color:#FF0000;" routerLink="/video/favourites"></i>
          <i class="fas fa-user fa-3x pointer" style="color:black;" (click)="profile()"></i>
          <i class="fas fa-sign-out-alt fa-3x pointer" (click)="logout()" routerLink=""></i>
        </li>
      </ul> -->
  </div>
</nav>

</template>

<script>
export default {
    
}
</script>

<style scoped>
  i + i {
      margin-left: 40px;
  }

  .pointer {
      cursor: pointer;
  }
</style>