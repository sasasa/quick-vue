<script setup>
import { ref } from 'vue'
const message = ref('こんにちは、Vue.js！')
const isChange = ref(true)
</script>

<template>
  <div class="big"
    v-bind:class="{ color: true, frame: isChange }">
    {{ message }}
  </div>
</template>

<style scoped>
</style>
