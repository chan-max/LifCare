import App from './App'
import store from './store'

import * as Pinia from 'pinia';


// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
Vue.prototype.$store = store

App.mpType = 'app'
const app = new Vue({
	store,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'

// import VConsole from 'vconsole';


export function createApp() {
	// let vConsole = new VConsole();

	const app = createSSRApp(App)

	app.use(store)

	app.use(Pinia.createPinia());
	
	return {
		app
	}
}
// #endif