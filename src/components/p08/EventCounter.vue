<script setup>
import { ref } from 'vue'
const props = defineProps([ 'step' ])
// const emit = defineEmits([ 'increment' ])
const emit = defineEmits({
  increment: step => {
    if (step && Number.isInteger(step)) {
      return true
    } else {
      console.log('Invalid increment event!!')
      return false
    }
  }
})
const onclick = () => emit('increment', Number(props.step))
</script>

<template>
  <input type="button" v-on:click="onclick" v-bind:value="step" />
</template>

<style scoped>
</style>
