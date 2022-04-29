<script setup>
import { ref } from 'vue'
const message = ref('こんにちは、Vue.js！')
</script>

<template>
  <p v-cloak>{{ message }}</p>
</template>

<style scoped>
[v-cloak] {
  display: none;
}
</style>
