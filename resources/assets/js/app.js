import Vue from 'vue'
import './stylus/main.styl'
import VApp from 'vuetify/es5/components/VApp'
import Vuetify from 'vuetify/es5/components/Vuetify'
import VGrid from 'vuetify/es5/components/VGrid'
import VCard from 'vuetify/es5/components/VCard'
import VBtn from 'vuetify/es5/components/VBtn'
import VIcon from 'vuetify/es5/components/VIcon'
import VSnackbar from 'vuetify/es5/components/VSnackbar'
import transitions from 'vuetify/es5/components/transitions'
import directives from 'vuetify/es5/directives'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import App from '~/components/App'
import Bus from '~/event'
import '~/plugins'
import '~/components'

Vue.use(Vuetify, {
  components: {
    VApp,
    Vuetify,
    VSnackbar,
    VGrid,
    VCard,
    VBtn,
    VIcon
  },
  directives,
  transitions
})

Vue.config.productionTip = false

Vue.prototype.$_bus = Bus

/* eslint-disable no-new */
new Vue({
  i18n,
  store,
  router,
  ...App
})
