<script setup>
import { ref } from 'vue'
import EventCounter from './EventCounter.vue'
const count = ref(0)
const onincrement = e => count.value += e
</script>

<template>
  <div>現在のカウント：{{ count }}</div>
  <div>
    <!-- <EventCounter step="Hoge" v-on:increment="onincrement" /> -->
    <EventCounter v-bind:step="1" v-on:increment="onincrement" />
    <EventCounter v-bind:step="5" v-on:increment="onincrement" />
    <EventCounter v-bind:step="10" v-on:increment="onincrement" />
    <EventCounter v-bind:step="-1" v-on:increment="onincrement" />
  </div>
</template>

<style scoped>
</style>
