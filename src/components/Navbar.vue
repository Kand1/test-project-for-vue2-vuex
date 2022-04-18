<template>
  <v-container fluid>
    <v-app-bar
        color="deep-purple"
        dark
    >
      <v-spacer/>
      <v-btn outlined class="ml-3">
        <router-link class="white--text" to = '/main'>
          Main
        </router-link>
      </v-btn>
      <v-btn outlined class="ml-3">
        <router-link class="white--text" to = '/'>
          Photos
        </router-link>
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>