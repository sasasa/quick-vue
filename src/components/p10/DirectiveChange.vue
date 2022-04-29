<script setup>
import { ref } from 'vue'
const color = ref('Yellow')
</script>

<template>
  <select v-model="color">
    <option value="Yellow">黄</option>
    <option value="Black">黒</option>
    <option value="Lime">ライム</option>
  </select>
  <p>JavaScriptフレームワークの代表として、Angular、React、<span v-highlight="color">Vue.js</span>などが挙げられます。</p>
</template>

<style scoped>
</style>
