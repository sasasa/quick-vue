<script setup>
const onclick = message => {
  console.log(message)
}
</script>

<template>
    <button v-on:click="onclick('こんにちは')">クリック</button>
</template>

<style scoped>
</style>
