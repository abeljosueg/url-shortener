<template>
  <div class="text-center w-100">
    <h2 class="fw-bold pb-3">URL Shortener</h2>
    <div class="input-group mb-3">
      <input type="text" class="form-control rounded-start-pill" v-model="url" placeholder="Enter your URL here..." aria-describedby="button-addon2">
      <button class="btn btn-dark rounded-end-pill" type="button" id="button-addon2" @click="shortenUrl">Shorten</button>
    </div>
    <div v-if="shortUrl">
      <h6>Here is your shortened URL:</h6>
      <div class="d-flex justify-content-center align-items-baseline">
        <p><a :href="shortUrl" target="_blank">{{ shortUrl }}</a></p>
        <button class="btn btn-dark rounded-pill ms-2" @click="copyUrl">{{ buttonText }}</button>
      </div>
    </div>
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