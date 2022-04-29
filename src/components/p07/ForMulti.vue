<script setup>
import { ref } from 'vue'
const articles = ref([
  {
    title: 'Angular TIPS',
    description: '人気のJavaScriptフレームワーク「Angular」の目的別リファレンス',
    author: '山田祥寛'
  },
  {
    title: 'Tessel 2ではじめるセンサー電子工作入門',
    description: 'Tessel 2を使った面白い電子工作を紹介',
    author: '高江賢'
  },
  {
    title: 'Web業界で働くためのPHP入門',
    description: '「PHP」の文法を一から学ぶための入門連載',
    author: '齊藤新三'
  },
  {
    title: 'jQuery逆引きリファレンス',
    description: 'jQueryの基本機能や実用Tipsを目的別で探せるリファレンス',
    author: '山田祥寛'
  }
])
</script>

<template>
  <template v-for="a in articles" v-bind:key="a.title">
    <header>{{ a.title }}</header>
    <div>{{ a.description }}</div>
    <footer>{{ a.author }} 著</footer>
  </template>
</template>

<style scoped>
</style>
