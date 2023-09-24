/* eslint-disable import/no-extraneous-dependencies */
import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCheck, faPlus, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import router from './router';
import App from './App.vue';

library.add(faPlus);
library.add(faRightFromBracket);
library.add(faCheck);

createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
