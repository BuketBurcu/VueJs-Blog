import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'; 
// import { Icon } from '@iconify/vue';
// .component('Icon', Icon)

createApp(App).use(router).mount('#app')
