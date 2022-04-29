<script setup>
import vHighlight from '@/directives/vHighlight.js'
import { ref } from 'vue'
const color = ref('Yellow')
</script>

<template>
  <p>JavaScriptフレームワークの代表として、Angular、React、<span v-highlight="color">Vue.js</span>などが挙げられます。</p>
</template>

<style scoped>
</style>
