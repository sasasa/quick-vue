<script setup>
import { ref } from 'vue'
const message =  ref('こんにちは、Vue.js！')
</script>

<template>
  <p>{{ message }}</p>
  <p v-text="message"></p>
</template>

<style scoped>
</style>
