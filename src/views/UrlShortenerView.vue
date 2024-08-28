<template>
  <div class="text-center w-100">
    <h2 class="fw-bold pb-3">URL Shortener</h2>
    <div class="input-group mb-3">
      <input type="text" class="form-control rounded-start-pill" v-model="url" placeholder="https://www.example.com/some/long/url" aria-describedby="button-addon2">
      <button class="btn btn-primary rounded-end-pill" type="button" id="button-addon2" @click="shortenUrl">Shorten</button>
    </div>
    <h6>Here is your shortened URL:</h6>
    <p v-if="shortUrl"><a :href="shortUrl" target="_blank">{{ shortUrl }}</a></p>
    <p class="text-body-secondary" v-else>You have not entered a URL yet<br></p>
    <button class="btn btn-primary rounded-pill" @click="copyUrl">{{ buttonText }}</button>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const url = ref('');
const shortUrl = ref('');
const buttonText = ref('Copy');

const shortenUrl = async () => {
  try {
    const response = await axios.post('http://localhost:3000/api', { url: url.value });
    shortUrl.value = response.data.shortUrl;
    buttonText.value = 'Copy'; // Reset button text
  } catch (error) {
    console.error(error);
  }
};

const copyUrl = () => {
  navigator.clipboard.writeText(shortUrl.value);
  buttonText.value = 'Copied!'; // Update button text
};
</script>

<style scoped>
</style>