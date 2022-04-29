<script setup>
import { ref } from 'vue'
const message = ref('こんにちは、Vue.js！')
</script>

<template>
  <!-- <div v-bind:style="{ 'background-color': 'Yellow', 'font-size': '1.5em' }"> -->
  <div v-bind:style="{ backgroundColor: 'Yellow', fontSize: '1.5em' }">
    {{ message }}
  </div>
</template>

<style scoped>
</style>
