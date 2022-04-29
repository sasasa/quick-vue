<script setup>
import { ref } from 'vue'
const newitem = ref('')
const list = ref([
  'メールニュースの配信',
  '経理の月末処理',
  '粗大ごみの回収',
  '読者質問への対応',
  'レビューデータのバックアップ'
])
const onclick = () => {
  list.value.push(newitem.value)
  newitem.value = ''
}
</script>

<template>
  <form>
    <input type="text" v-model="newitem" />
    <input type="button" value="追加" v-on:click="onclick" />
  </form>
  <TransitionGroup tag="ul">
    <li v-for="item in list" v-bind:key="item">{{ item }}</li>
  </TransitionGroup>
</template>

<style scoped>
:deep(.banner) {
  border: 1px solid #000;
  border-radius: 3px;
  padding: 5px;
  width: 80%;
}

.v-enter-active, .v-leave-active {
  transition: opacity 3s;
}

.v-leave-active {
  position: absolute;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>
