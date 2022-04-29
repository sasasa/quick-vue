<script setup>
import { ref } from 'vue'
const email = ref('Yamada@example.com')
</script>

<template>
  <p>{{ email.split('@')[0].toLowerCase() }}</p>
</template>

<style scoped>
</style>
