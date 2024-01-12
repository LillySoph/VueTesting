<script setup lang="ts">
    const datum = defineModel("datum")
    const nr = defineModel("nr")
    const betreff = defineModel("betreff")
    const autor = defineModel("autor")
    import InputText from 'primevue/inputtext'; 
</script>

<template>
  <p>Erstelldatum: 
    <InputText type="date" v-model="datum"/>
  </p>
  <div class="flex flex-column">
  <div class="field-col">
    <label for="nr">Berichtnummer</label>
    <InputText id="nr" type="text" v-model="nr"/>
  </div>
  <div class="field-col">
    <label for="nr">Betreff</label>
    <InputText id="betreff" type="text" v-model="betreff"/>
  </div>
  <div class="field-col">
    <label for="nr">Autor</label>
    <InputText id="autor" type="text" v-model="autor"/>
  </div>
  </div>
</template>