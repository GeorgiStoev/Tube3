<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>

 import Header from './components/core/Header';
 //import Home from './components/home/Home';
 import Footer from './components/core/Footer';

export default {
  name: 'App',
  components: {
     Header,
     //Home,
     Footer
  }
}

</script>

<style>
#app {
  
}
</style>
