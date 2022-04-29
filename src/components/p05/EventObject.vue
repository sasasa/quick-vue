<script setup>
const onclick = e => {
  console.log(e)
}
</script>

<template>
  <button v-on:click="onclick">クリック</button>
</template>

<style scoped>
</style>
