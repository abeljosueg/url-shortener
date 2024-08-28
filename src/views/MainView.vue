<template>
  <div class="text-center w-100">
    <h2 class="fw-bold pb-3">URL Shortener</h2>
    <div class="input-group mb-3">
      <input type="text" class="form-control rounded-start-pill" placeholder="https://www.example.com/some/long/url" aria-describedby="button-addon2">
      <button class="btn btn-primary rounded-end-pill" type="button" id="button-addon2">Shorten</button>
    </div>
    <h6>Here is your shortened URL:</h6>
    <p class="text-body-secondary">You have not entered a URL yet<br></p>
    <button class="btn btn-primary rounded-pill">Copy</button>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>