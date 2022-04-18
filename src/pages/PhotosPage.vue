<template>
  <v-container>
    <v-card>
      <v-card-title>
        <div>
          Photos Page
        </div>
      </v-card-title>
      <v-card-text>
        You can open photo or add a new one
      </v-card-text>
    </v-card>
    <PhotoForm
      @addPhoto="addPhoto"
    />
    <v-row :justify="start">
      <Photo v-for="photo in $store.getters.getAllPhotos"
             v-bind:photo="photo"
             v-bind:columnsCount="columnsCount"
      />
    </v-row>
    <PhotoDialog/>
  </v-container>
</template>

<script>
import Photo from '@/components/photo/Photo'
import PhotoForm from "@/components/photo/PhotoForm";
import PhotoDialog from "@/components/photo/PhotoDialog";
import {mapActions, mapMutations} from 'vuex'
export default {


  components: {
    Photo,
    PhotoForm,
    PhotoDialog
  },
  mounted() {

    this.fetchPhotos()
  },

  methods: {
    ...mapActions(['fetchPhotos']),
    addPhoto(photo) {
      this.$store.commit('addPhoto', photo)
    },
    openPhoto(photo) {
      this.currentPhoto = photo
      this.dialogVisible = true
    },

  }
}
</script>

<style scoped>

</style>