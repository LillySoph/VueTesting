<script setup lang="ts">
import { ref } from 'vue'
import ReportForm from './components/ReportForm.vue';
const count = ref(0)
</script>

<template>
  <ReportForm/>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>