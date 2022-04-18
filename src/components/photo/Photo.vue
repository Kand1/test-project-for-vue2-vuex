<template>
  <v-col cols="3">
    <v-card
        class="mx-auto my-12"
        max-width="300"
        @click="openPhoto">
      <v-img
          width="20vw"
          :src="photo.url"/>
      <v-card-title>
        {{photo.title}}
      </v-card-title>
      <v-card-text margin="auto">
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  props: {
    photo: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapMutations(['setCurrentPhoto', 'showDialog']),
    openPhoto() {
      this.setCurrentPhoto(this.photo)
      this.showDialog()
    }
  }
}
</script>

<style scoped>

</style>