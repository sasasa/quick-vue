<script setup>
import { ref, computed } from 'vue'
const randomc = computed(() => Math.random())
const randomm = () => Math.random()
const current =  ref(new Date().toLocaleTimeString())

setInterval(() => {
  current.value = new Date().toLocaleTimeString()
}, 1000)
</script>

<template>
  <p>算出プロパティ：{{ randomc }}</p>
  <p>メソッド：{{ randomm() }}</p>
  <p>現在日時：{{ current }}</p>
</template>

<style scoped>
</style>
