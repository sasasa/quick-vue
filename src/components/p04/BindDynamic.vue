<script setup>
import { ref } from 'vue'
const attr = ref('width')
// const attr = ref('height')
const value = ref(100)
</script>

<template>
  <img src="https://wings.msn.to/image/wings.jpg"
    v-bind:[attr]="value" />
</template>

<style scoped>
</style>
