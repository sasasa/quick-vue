<script setup>
import { ref } from 'vue'
const message = ref('')
const onclick = () => {
  message.value = new Date().toLocaleString()
}
</script>

<template>
  <button v-on:click="onclick">クリック</button>
  <!-- <button v-on:click="message= new Date().toLocaleString()">クリック</button> -->
  <!-- <button v-on:click="onclick()">クリック</button> -->
  <!-- <button @click="onclick">クリック</button> -->
  <p>{{ message }}</p>
</template>

<style scoped>
</style>
