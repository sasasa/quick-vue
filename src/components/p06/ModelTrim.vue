<script setup>
import { ref } from 'vue'
const message = ref('')
const onchange = () => {
  console.log(`入力値は「${message.value}」です。`)
}
</script>

<template>
  <form>
    <label for="message">メッセージ：</label>
    <input type="text" id="message" v-model.trim="message"
      v-on:change="onchange" />
  </form>
</template>

<style scoped>
</style>
