<template>
  <v-app-bar app>
    <v-toolbar-title class="headline text-uppercase">
      <span>Free</span>
      <span class="font-weight-light">Market</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text>
      <span class="mr-2">Logout</span>
      <v-icon>mdi-logout</v-icon>
    </v-btn>
    <Login />
  </v-app-bar>
</template>

<script>
  import Login from './Login'

  export default {
    name: "TheToolbar",
    components: {
      Login
    },
    data: () => ({})
  }
</script>

<style scoped>

</style>