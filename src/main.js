import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { 
  NavbarPlugin,
  DropdownPlugin,
  IconsPlugin,
  FormInputPlugin,
  TablePlugin,
  VBTooltipPlugin
 } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(NavbarPlugin)
Vue.use(DropdownPlugin)
Vue.use(IconsPlugin)
Vue.use(FormInputPlugin)
Vue.use(TablePlugin)
Vue.use(VBTooltipPlugin)


//Tailwind CSS
//Import after Animate CSS for overriding Basic Animate-CSS Animations
import './assets/css/tailwind.css';

import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
