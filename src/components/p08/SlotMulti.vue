<script setup>
import MyHelloMulti from './MyHelloMulti.vue'
</script>

<template>
  <MyHelloMulti>
    <template v-slot:header>
      <h3>ようこそ速習Vue.jsへ</h3>
    </template>    
    <!-- 
    <template #header>
      <h3>ようこそ速習Vue.jsへ</h3>
    </template>
    -->
    <p>一緒に勉強しましょう。</p>
    <template v-slot:footer>
      <a href="#">Q＆A掲示板</a>
    </template>
    <p>質問は掲示板へどうぞ。</p>
  </MyHelloMulti>
</template>

<style scoped>
</style>
