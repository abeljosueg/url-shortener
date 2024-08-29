<template>
  <div class="text-center w-100">
    <h2 class="fw-bold pb-3">URL Click Counter</h2>
    <div class="input-group mb-3">
      <input type="text" class="form-control rounded-start-pill" v-model="url" placeholder="Enter your shortened URL here..." aria-describedby="button-addon2">
      <button class="btn btn-dark rounded-end-pill" type="button" id="button-addon2" @click="getUrlInfo">Track URL</button>
    </div>
    <div v-if="loaded">
      <h6>Total of clicks made:</h6>
      <h1 class="fw-bold">{{ urlInfo.clicks }}</h1>
      <h6>Last updated:</h6>
      <p class="text-secondary">{{ formatDate(urlInfo.updatedAt) }}</p>
    </div>
    <p v-else-if="error" class="text-danger">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const url = ref('');
const urlInfo = ref({});
const loaded = ref(false);
const error = ref(null);

function extractCode(url) {
  const regex = /\/api\/([A-Za-z0-9]{6})/;
  const match = url.match(regex);
  return match && match[1];
}

async function getUrlInfo() {
  const code = extractCode(url.value);
  if (code) {
    try {
      const response = await axios.get(`http://localhost:3000/api/info/${code}`);
      urlInfo.value = response.data;
      loaded.value = true;
      error.value = null;
    } catch (err) {
      error.value = err.message;
      loaded.value = false;
    }
  }
}

function formatDate(dateString) {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return 'Invalid date';
  }
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }).format(date);
}
</script>