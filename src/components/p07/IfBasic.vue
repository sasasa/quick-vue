<script setup>
import { ref } from 'vue'
const toggle = ref(true)
</script>

<template>
  <form>
    <label for="show">表示／非表示</label>
    <input type="checkbox" id="show" v-model="toggle" />
  </form>
  <hr />
  <div id="panel" v-if="toggle">
  <!-- <div id="panel" v-show="toggle"> -->
    <h4>式の真偽に応じて表示／非表示を切り替える - v-if</h4>
    <p>v-ifは、JavaScriptのif命令に相当するディレクティブです。<br />
    指定された条件式がtrueの場合にだけ、現在の要素を出力します。</p>
  </div>
    <!-- <div v-else>現在、非表示状態です。</div> -->
</template>

<style scoped>
</style>
