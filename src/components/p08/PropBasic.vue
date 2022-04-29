<script setup>
import { ref } from 'vue'
import MyHello from './MyHello.vue'
</script>

<template>
  <MyHello name="鈴木次郎" />
  <!-- <MyHello /> -->
  <!-- <MyHello v-bind:name="name" />  -->
  <!-- <MyHello v-bind:name="'鈴木次郎'" /> -->
  <!-- <MyHello name="鈴木次郎" id="hello" class="hoge" /> -->

</template>

<style scoped>
</style>
