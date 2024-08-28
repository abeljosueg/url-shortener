<template>
  <NavBar/>
  <div class="container d-flex justify-content-center pt-5">
    <router-view/>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';

</script>

<style scoped>
* {
    font-family: Poppins;
}

@font-face {
    font-family: Poppins;
    src: url('@/assets/fonts/Poppins-Regular.ttf');
}
</style>
