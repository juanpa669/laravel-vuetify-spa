<template>
  <div class="text-center">
    <img v-if="userAvatar" :src="userAvatar">
    <button id="pick-avatar">Select an image</button>
    <avatar-cropper
      @uploaded="handleUploaded"
      trigger="#pick-avatar"
      upload-url="api/files/upload"
      :labels="{submit: 'Submit', cancel: 'Cancel'}" />
  </div>
</template>

<script>
  import AvatarCropper from "vue-avatar-cropper"
  import Form from 'vform'

  export default {
    name: 'user-avatar',

    props: {
      avatar: {
        type: String,
        required: true
      }
    },

    components: { AvatarCropper },

    data() {
      return {
        form: new Form({
        photo_url: '',
        }),
        userAvatar: this.avatar,
      }
    },

    methods: {
      handleUploaded(resp) {
        console.og('resp => ' + JSON.stringify(resp))
        this.form.patch('/api/files/upload')
        this.form.reset()
        this.userAvatar = resp.relative_url;
      }
    }
  }
</script>

<style>

</style>
