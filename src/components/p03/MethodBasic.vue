<script setup>
import { ref } from 'vue'
const email = ref('Yamada@example.com')
const localEmail = () => {
  return email.value.split('@')[0].toLowerCase()
}
</script>

<template>
  <p>{{ localEmail() }}</p>
</template>

<style scoped>
</style>
