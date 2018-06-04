<template>
  <v-layout>
    <v-btn flat icon>
      <v-icon dark>share</v-icon>
    </v-btn>
    <v-btn flat icon :to="`/threads/${item.id}`">
    <v-icon large color="orange">explore</v-icon>
    </v-btn>
    <v-spacer></v-spacer>

    <v-btn @click="toggleFavorite(item.id, item.creator.id)" fab dark small :color="isFavorite === true ? 'white' : 'pink'">
    <v-icon :small="!isFavorite" :medium="isFavorite" :color="isFavorite === true ? 'red' : 'white'">favorite</v-icon>
    </v-btn>
  </v-layout>
</template>

<script>
export default {
  name: 'base-actions',

    props: {
      item: {
        type: Object,
        required: true
      }
    },

    data () {
      return {
        isFavorite: false
      }
    },

    computed: {
      creator () { return this.item.creator }
    },

    methods: {
      toggleFavorite () {
        this.isFavorite = !this.isFavorite
        this.$_bus.$emit('ThreadToggleFavoriteEvt', { isFavorite: this.isFavorite, thread_ID: this.id, creator: this.creator.name })
      }
    }
}
</script>

<style>

</style>
