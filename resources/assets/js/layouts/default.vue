<template>
  <div class="main-layout">
    <navbar/>

    <div class="container mt-4">
       <v-snackbar
      :timeout="toast.timeout"
      :top="toast.top"
      :bottom="toast.bottom"
      :right="toast.right"
      :left="toast.left"
      :multi-line="toast.multiline"
      :vertical="toast.vertical"
      v-model="notification"
    >
      {{ toast.text }}
      <v-btn flat color="pink" @click.native="notification = false">Close</v-btn>
    </v-snackbar>
      <child/>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import snackNotificationQueue from './../mixins/snackNotificationQueue'
export default {
  name: 'MainLayout',

  components: {
    Navbar
  },

  mixins: [snackNotificationQueue],

  data () {
    return {
      snackbar: true
    }
  },

  mounted () {
    this.$_bus.$on('ThreadToggleFavoriteEvt', this.storeFavoriteStatus)
  },

  methods: {
    storeFavoriteStatus (data) {
      const toast = this.makeToast(`Thread id: ${data.thread_ID} isFavorite : ${data.isFavorite} by ${data.creator}`)
      console.log(toast)
      this.addNotification(toast)
    }
  }
}
</script>
