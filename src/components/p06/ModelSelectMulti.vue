<script setup>
import { ref } from 'vue'
const language = ref(['日本語' ,'英語'])
</script>

<template>
  <form>
    <select v-model="language" multiple size="4">
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
