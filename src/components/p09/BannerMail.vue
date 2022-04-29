<script>
export default {
  name: 'BannerMail'
}
</script>
<script setup>
import { ref } from 'vue'
const name = ref(''); 
</script>

<template>
  <div class="banner">
    <h3>会員登録</h3>
    <p>「WINGS News」は、会員専用のメールニュースです。</p>
    <p>最新の情報をいち早く入手したいという方は、是非、下記のフォームから会員登録してください。</p>
    <label for="name">メールアドレス登録：</label>
    <input type="text" v-model="name" />
  </div>
</template>

<style scoped>
</style>
