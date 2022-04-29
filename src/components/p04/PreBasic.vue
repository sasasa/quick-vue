<script setup>
import { ref } from 'vue'
const message =  ref('こんにちは、Vue.js！')
</script>

<template>
  <p v-pre>{{ message }}</p>
</template>

<style scoped>
</style>
