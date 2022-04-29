<script setup>
import { ref } from 'vue'
const agree = ref(true)
</script>

<template>
  <form>
    <label for="agree">同意する：</label>
    <input type="checkbox" id="agree" v-model="agree" />
    <!-- <input type="checkbox" id="agree" v-model="agree"
      true-value="○" false-value="×" /> -->
  </form>
  <div>回答：{{ agree }} </div>
</template>

<style scoped>
</style>
