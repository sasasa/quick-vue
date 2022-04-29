<script setup>
import { ref } from 'vue'
const season = ref('')
</script>

<template>
  <form>
    <select v-model="season">
      <option value="">季節を選択してください。</option>
      <option value="spring">春</option>
      <option value="summer">夏</option>
      <option value="autumn">秋</option>
      <option value="winter">冬</option>
    </select>
  </form>
  <div v-if="season==='spring'">春は名のみの風の寒さや。谷のうぐいす歌は思えど。</div>
  <div v-else-if="season==='summer'">夏も近づく八十八夜、 野にも山にも若葉が茂る。</div>
  <div v-else-if="season==='autumn'">秋の夕日に照る山もみじ、濃いも薄いも数ある中に。</div>
  <div v-else-if="season==='winter'">さ霧消ゆる湊江の舟に白し、朝の霜。</div>
  <div v-else>なにも選択されていません。</div>
</template>

<style scoped>
</style>
