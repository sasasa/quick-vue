<script setup>
import { ref } from 'vue'
const current =  ref(new Date().toLocaleTimeString())

setInterval(() => {
  current.value = new Date().toLocaleTimeString()
}, 1000)

</script>

<template>
 <p>{{ current }}</p>
</template>

<style scoped>
</style>
