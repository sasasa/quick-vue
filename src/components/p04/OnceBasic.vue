<script setup>
import { ref } from 'vue'
const current =  ref(new Date().toLocaleTimeString())

setInterval(() => {
  current.value = new Date().toLocaleTimeString()
}, 1000)
</script>

<template>
  <p v-once>現在時刻（onceあり）：{{ current }}</p>
  <p>現在時刻（onceなし）：{{ current }}</p>
</template>

<style scoped>
</style>
