<script setup>
import { ref } from 'vue'
const language = ref(['日本語', '英語'])
</script>

<template>
  <form>
    <div>話せる言語は？</div>
    <label for="japanese">日本語</label>
    <input type="checkbox" id="japanese" value="日本語" v-model="language" />
    <label for="english">英語</label>
    <input type="checkbox" id="english" value="英語" v-model="language" />
    <label for="german">ドイツ語</label>
    <input type="checkbox" id="german" value="ドイツ語" v-model="language" />
  </form>
  <p> 回答：{{ language }}</p>
</template>

<style scoped>
</style>
