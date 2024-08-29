<template>
  <div class="text-center w-100">
    <TitleComponent :text="'URL Shortener'" />
    <DescriptionComponent :text="'This powerful tool allows you to shorten long, cumbersome URLs into concise and easy-to-share links. The URL Shortener helps you save space and make your links more manageable. Simply enter your original URL, and the tool will generate a shortened version that redirects to the original link.'" />
    <InputGroup v-model="url" placeholder="Enter your URL here..." :buttonText="'Shorten'" @click="shortenUrl" @update:value="url = $event" />
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
import TitleComponent from '@/components/TitleComponent.vue';
import DescriptionComponent from '@/components/DescriptionComponent.vue';
import InputGroup from '@/components/InputGroup.vue';

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