import { createApp } from 'vue';
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
import { VueReCaptcha } from 'vue-recaptcha-v3';
import App from './App.vue';
import router from './router';
import './assets/css/style.css';

createApp(App).use(router).use(ToastPlugin).use(VueReCaptcha, { siteKey: '6LcE0F8pAAAAAA1immczCQm29-zgoXHTp83pTqur' })
  .mount('#app');
