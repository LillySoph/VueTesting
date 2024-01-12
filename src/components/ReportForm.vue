<script lang="ts" setup>
import { ref } from 'vue'
import Entry from './Entry.vue';
import Report from './Report.vue';
import InputText from 'primevue/inputtext'; 
import Skeleton from 'primevue/skeleton'; 
const uhrzeit = defineModel("uhrzeit")
</script>

<template>
    <h2>Neuen Bericht anlegen:</h2>
    <Skeleton width="10rem" class="mb-2"></Skeleton>
    <Skeleton width="5rem" class="mb-2"></Skeleton>
    <Report/>
    <h3>Hier können neue Einträge hinzugefügt werden:</h3>
    <InputText v-model="uhrzeit" placeholder="Uhrzeit" />
    <Entry /> 
    <button>Bericht als DOCX exportieren</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>