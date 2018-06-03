import Vue from 'vue'
// import './stylus/main.styl'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import App from '~/components/App'
import Vuetify from 'vuetify'
import '~/plugins'
import '~/components'
// import {
//   Vuetify, // required
//   VApp, // required
//   VNavigationDrawer,
//   VFooter,
//   VToolbar,
//   transitions
// } from 'vuetify'
// import { Ripple } from 'vuetify/es5/directives'

// Vue.use(Vuetify, {
//   components: {
//     VApp,
//     VNavigationDrawer,
//     VFooter,
//     VToolbar,
//     transitions
//   },
//   directives: {
//     Ripple
//   }
// })
Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  i18n,
  store,
  router,
  ...App
})
