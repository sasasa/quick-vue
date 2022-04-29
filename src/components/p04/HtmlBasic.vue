<script setup>
import { ref } from 'vue'
const message = ref(`<h1>こんにちは</h1>
  <span><a href="https://jp.vuejs.org/">Vue.js！</a></span>`)
</script>

<template>
  <!-- <p>{{ message }}</p> -->
  <p v-html="message"></p>
</template>

<style scoped>
</style>
