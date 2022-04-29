<script setup>
import { ref } from 'vue'
const language = ref('')
</script>

<template>
  <form>
    <select v-model="language">
      <option value="">話せる言語は？</option>
      <option>日本語</option>
      <option>英語</option>
      <option>ドイツ語</option>
    </select>
  </form>
  <p> 回答：{{ language }}</p>
</template>

<style scoped>
</style>
