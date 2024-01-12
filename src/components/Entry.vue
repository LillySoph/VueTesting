<script lang="ts" setup>
    import Editor from 'primevue/editor';
</script>

<template v-slot:toolbar>
    <Editor v-model="value" editorStyle="height: 120px">
    <template v-slot:toolbar>
        <span class="ql-formats">
            <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
            <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
            <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
        </span>
    </template>
</Editor>
</template>

<style>
 
</style>