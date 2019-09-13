<template>
  <v-app>
    <TheToolbar />

<!--    <v-img-->
<!--      src="./assets/spread-dollars.jpg"-->
<!--      lazy-src="https://picsum.photos/id/11/10/6"-->
<!--      aspect-ratio="1"-->
<!--      class="grey lighten-2 imageOpacity"-->
<!--      max-height="100vh"-->
<!--      max-width="100vw"-->
<!--    >-->
      <v-content>
        <router-view />
      </v-content>
<!--    </v-img>-->
    <BaseSnackbar />
  </v-app>
</template>

<script>
  import TheToolbar from './components/TheToolbar'
  import BaseSnackbar from './components/BaseSnackbar'

export default {
  name: "App",
  components: {
    TheToolbar,
    BaseSnackbar
  },
  data: () => ({
    login: {
      email: '',
      password: ''
    },
    showPassword: false,
    loginFormValid: '',
  })
};
</script>

<style scoped>
.imageOpacity {
  opacity: 1;
}
</style>
