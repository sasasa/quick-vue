<script setup>
import { ref } from 'vue'
const msg = ref('')
const onclick = e => {
  msg.value = `右クリックした座標：${e.clientX}, ${e.clientY}`
}
</script>

<template>
  <div id="main" v-on:click.right.prevent="onclick">
  <!-- <div id="main" v-on:click.ctrl.exact.right.prevent="onclick"> -->
    {{ msg }}
  </div>
</template>

<style scoped>
#main {
  border: 1px solid black;
  width: 150px;
  height: 100px;
}
</style>
