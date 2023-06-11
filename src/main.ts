import { createApp } from 'vue'
import './style.css'
import store from '../store/index';
import router from '../router/index';
import App from './App.vue'

const app = createApp(App);
app.use(router);
app.use(store).mount('#app');
