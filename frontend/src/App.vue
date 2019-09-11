<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Free</span>
        <span class="font-weight-light">Market</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Logout</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-img
      src="./assets/dollars.jpg"
      lazy-src="https://picsum.photos/id/11/10/6"
      aspect-ratio="1"
      class="grey lighten-2 imageOpacity"
      max-height="100vh"
      max-width="100vw"
    >
      <v-content>
        <router-view />
      </v-content>
    </v-img>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  })
};
</script>

<style scoped>
.imageOpacity {
  opacity: 1;
}
</style>