<script setup>
const onclick = (message, e) => {
  console.log(message)
  console.log(e)
}
</script>

<template>
  <button v-on:click="onclick('こんにちは', $event)">クリック</button>
</template>

<style scoped>
</style>
