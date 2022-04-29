<script setup>
import { ref } from 'vue'
const time = ref(0)
const onchange = () => {
  console.log(time.value.toFixed(1))
}
</script>

<template>
  <form>
    <label for="time">50m走タイム：</label>
    <input type="text" id="time" v-model.number="time" v-on:change="onchange" />
  </form>
</template>

<style scoped>
</style>
