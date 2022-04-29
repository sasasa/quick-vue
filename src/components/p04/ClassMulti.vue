<script setup>
import { ref } from 'vue'
const message = ref('こんにちは、Vue.js！')
const colorClass = ref('color')
const isChange = ref(true)
</script>

<template>
  <div class="big"
    v-bind:class="[colorClass, { frame: isChange }]">
    {{ message }}
  </div>
</template>

<style scoped>
</style>
