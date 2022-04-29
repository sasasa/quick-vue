<script setup>
import { ref } from 'vue'
const message = ref('こんにちは、Vue.js！')
const colorClass = ref('color')
const frameClass = ref('frame')
</script>

<template>
  <div class="big"
    v-bind:class="[ colorClass, frameClass ]">
    {{ message }}
  </div>
</template>

<style scoped>
</style>
