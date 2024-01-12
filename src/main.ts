import 'primevue/resources/themes/lara-light-green/theme.css'
import '/node_modules/primeflex/primeflex.css'
import PrimeVue from 'primevue/config';
import { createApp } from 'vue'
import App from './App.vue'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { QuillEditor } from '@vueup/vue-quill'


const app = createApp(App)
app.component('QuillEditor', QuillEditor)

app.mount('#app')
app.use(PrimeVue)
