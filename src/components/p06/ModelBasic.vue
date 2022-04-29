<script setup>
import { ref } from 'vue'
const myName = ref('ゲスト')
</script>

<template>
  <form>
    <label for="name">氏名：</label>
    <input type="text" id="name" v-model="myName" />
  </form>
  <div>こんにちは、{{ myName }} さん！</div>
</template>

<style scoped>
</style>
