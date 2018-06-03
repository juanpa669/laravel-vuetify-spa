<template>

    <div class="shrink">
      <div v-if="currentThread">
      <h1 class="display-1">{{currentThread.channel.name}}  </h1>
        <h2>{{currentThread.title}}</h2>
        <p>{{currentThread.body}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SingleThread',

  computed: {
    ...mapGetters({currentThread: 'thread/currentThread'}),
    theID () { return this.$route.params.id }
  },

  mounted () {
    this.findThread(this.theID)
  },

  methods: {
    ...mapActions({ findThread: 'thread/findThread'})
  }
}
</script>

<style>

</style>
