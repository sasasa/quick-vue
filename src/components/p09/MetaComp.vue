<script setup>
import BannerNew from './BannerNew.vue'
import BannerWings from './BannerWings.vue'
import BannerMail from './BannerMail.vue'
import { shallowRef } from 'vue'
const selected = shallowRef(BannerNew)
</script>

<template>
  <form>
    <select v-model="selected">
      <option v-bind:value="BannerNew">新刊紹介</option>
      <option v-bind:value="BannerWings">WINGSプロジェクトについて</option>
      <option v-bind:value="BannerMail">会員登録</option>
    </select>
    <Transition>
      <!-- <KeepAlive> -->
      <!-- <KeepAlive v-bind:include="[ 'BannerMail' ]"> -->
      <KeepAlive include="BannerMail">
        <component v-bind:is="selected" />
      </KeepAlive>
    </Transition>
  </form>
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
  opacity: 0.0;
}
/* 
.v-enter-to, .v-leave-from {
  opacity: 1.0;
}
 */
</style>
