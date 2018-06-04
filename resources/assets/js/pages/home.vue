<template>
<div>
   <card :title="$t('home')" class="bg-success text-white" v-if="showAlert && alert">
    {{ $t('you_are_logged_in') }}
  </card>

    <thread-template :items="threads"></thread-template>

</div>

</template>

<script>
import Cookies from 'js-cookie'
import { mapGetters, mapActions } from 'vuex'
export default {
  middleware: 'auth',

  metaInfo () {
    return { title: this.$t('home') }
  },

  computed: {
    ...mapGetters('thread', ['threads']),
    first () {  return Cookies.get('logAlert') },
    showAlert () {
      return Cookies.get('logAlert') == undefined ? true : false
    }
  },

  watch: {
    fetchedThreads: {
      handler: 'fetchThreads',
      immediate: true
    }
  },

  data () {
    return {
      fetchedThreads: null,
      alert: true
    }
  },

  mounted () {
    window.setTimeout(function() { return this.toggleAlert() }.bind(this), 5000)
  },

  methods: {
    ...mapActions('thread',{
      fetchThreads: 'fetchThreads'
      }),

    toggleAlert () {
      Cookies.set('logAlert', false, { expires: 365  })
      this.alert = false
    }
  }
}
</script>
