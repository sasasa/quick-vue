<script setup>
import { ref } from 'vue'
const color = ref('Yellow')
</script>

<template>
  <p>JavaScriptフレームワークの代表として、Angular、React、<span v-plugin-highlight="color">Vue.js</span>などが挙げられます。</p>
</template>

<style scoped>
</style>
