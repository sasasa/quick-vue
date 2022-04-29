<script setup>
import { ref } from 'vue'
const url = ref('https://wings.msn.to/')
</script>

<template>
  <!-- <a href="{{ url }}">サポートサイト</a> -->
  <a v-bind:href="url">サポートサイト</a>
  <!-- <a :href="url">サポートサイト</a> -->
</template>

<style scoped>
</style>
