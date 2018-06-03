<template>
<v-container grid-list-sm>
 <v-layout v-for="item in items" :key="item.id">
    <v-flex xs12 sm8 offset-sm2>
      <v-card color="grey lighten-3">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{item.title}}</span>
              </v-flex>
            </v-layout>
          </v-container>
        <v-card-title>
          <div>
            <span v-if="item.channel" class="grey--text">{{item.channel.name}}</span><br>
            <span>{{item.creator.name}}</span><br>
            <span>{{item.creator.created_at}}</span>
          </div>
        </v-card-title>
        <p>{{item.body}}</p>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  name: 'Threads',

  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>
