<script setup>
import { reactive } from 'vue'
const attrs = reactive({
  size: 12,
  maxlength: 15,
  required: true
})
</script>

<template>
  <form>
    <label for="message">メッセージ：</label>
    <input type="text" id="message" v-bind="attrs" />
  </form>
</template>

<style scoped>
</style>
