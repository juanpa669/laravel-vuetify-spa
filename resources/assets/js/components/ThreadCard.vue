<template>
  <div class="card">
  <div class="card-header">
    <span class="capitalize">{{ thread.channel !== null ? thread.channel.name : 'Featured' }}</span>
  </div>
  <div class="card-body">
    <h5 class="card-title" v-html="thread.title"></h5>
    <p class="card-text" v-html="thread.body"></p>
    <a :href="`/threads/${thread.id}`" class="btn btn-primary">Read more</a>
  </div>
</div>
</template>

<script>
export default {
  name: 'ThreadCard',

  props: {
    thread: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
</style>
