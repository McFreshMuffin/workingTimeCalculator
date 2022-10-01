import
// Vue,  
{ createApp } from 'vue';
import App from './App.vue'
import router from './router'

// import { 
//   NavbarPlugin,
//   DropdownPlugin,
//   IconsPlugin,
//   FormInputPlugin,
//   TablePlugin,
//   VBTooltipPlugin,
//   InputGroupPlugin,
//   ButtonPlugin
//  } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
// Vue.use(NavbarPlugin)
// Vue.use(DropdownPlugin)
// Vue.use(IconsPlugin)
// Vue.use(FormInputPlugin)
// Vue.use(TablePlugin)
// Vue.use(VBTooltipPlugin)
// Vue.use(InputGroupPlugin)
// Vue.use(ButtonPlugin)

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();


//Tailwind CSS
//Import after Animate CSS for overriding Basic Animate-CSS Animations
import './assets/css/tailwind.css';

import store from './store'
import './registerServiceWorker'

const app = createApp(App);
app.use(router);
app.use(store);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount('#app');
