<template>
  <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/" :class="getActiveClass('/')">URL Shortener</router-link>
          <router-link to="/myurls" :class="getActiveClass('/myurls')">My URLs</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

function getActiveClass(path) {
  const currentRoute = route.matched.find(route => route.path === path);
  return { 'nav-link': true, 'active': currentRoute !== undefined };
} 
</script>

<style scoped>

</style>