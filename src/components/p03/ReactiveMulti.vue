<script setup>
import { reactive } from 'vue'
const data =  reactive({
  current: new Date().toLocaleTimeString()
})

setInterval(() => {
  data.current = new Date().toLocaleTimeString()
}, 1000)
</script>

<template>
 <p>{{ data.current }}</p>
</template>

<style scoped>
</style>
