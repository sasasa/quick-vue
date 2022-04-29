<script setup>
import { ref } from 'vue'
const url = ref('https://wings.msn.to/')
</script>

<template>
  <a v-bind:style="{ 'tap-highlight-color': 'Yellow' }" 
    v-bind:href="url">
    {{ url }}
  </a>
</template>

<style scoped>
</style>
