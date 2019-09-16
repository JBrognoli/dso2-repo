<template>
  <v-app>
    <TheToolbar/>
    <TheNavDrawer></TheNavDrawer>
    <v-layout>
      <v-content>
        <router-view/>
      </v-content>
    </v-layout>
    <BaseSnackbar/>
  </v-app>
</template>

<script>
  import {mapMutations} from 'vuex';
  import TheToolbar from "./components/TheToolbar";
  import BaseSnackbar from "./components/BaseSnackbar";
  import TheNavDrawer from "./components/TheNavDrawer";

  export default {
    name: "App",
    components: {
      TheToolbar,
      BaseSnackbar,
      TheNavDrawer
    },
    data: () => ({
      login: {
        email: "",
        password: ""
      },
      showPassword: false,
      loginFormValid: ""
    }),
  };
</script>

<style scoped>
  .imageOpacity {
    opacity: 1;
  }
</style>
