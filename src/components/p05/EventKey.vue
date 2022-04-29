<script setup>
import { ref } from 'vue'

const name = ref('ゲスト')
const clear = () => {
  name.value = ''
}
</script>

<template>
  <form>
    <label for="name">氏名：</label>
    <input type="text" id="name" v-on:keyup.escape="clear" v-model="name" />
  </form>
</template>

<style scoped>
</style>
