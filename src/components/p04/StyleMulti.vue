<script setup>
import { ref, reactive } from 'vue'
const message = ref('こんにちは、Vue.js！')
const color = reactive({
  backgroundColor: 'Yellow',
  color: 'Red'
})
const big = reactive({
  fontSize: '1.5em'
})
</script>

<template>
  <div v-bind:style="[ color, big ]">
    {{ message }}
  </div>
</template>

<style scoped>
</style>
