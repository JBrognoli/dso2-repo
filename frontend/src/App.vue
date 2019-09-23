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
  import {mapState, mapMutations} from 'vuex';
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
    async created() {
      const darkThemeForage = await this.$getItem('darkTheme');
      darkThemeForage ? this.UPDATE_THEME(darkThemeForage) : '';
      this.$vuetify.theme.dark = this.dark
    },
    computed: {
      dark() {
        return this.$store.state.user.darkTheme
      }
    },
    methods: {
      ...mapMutations('user', ['UPDATE_THEME'])
    }
  };
</script>

<style scoped>
  .imageOpacity {
    opacity: 1;
  }
</style>
