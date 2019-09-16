<template>
  <v-app-bar app clipped-left>
    <v-app-bar-nav-icon v-if="logged" @click="handleDrawer"></v-app-bar-nav-icon>
    <v-btn text @click="handleLogo">
      <v-toolbar-title class="headline text-uppercase">
        <span>Free</span>
        <span class="font-weight-light">Market</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-btn>
    <v-spacer></v-spacer>
    <v-text-field
      append-icon="mdi-microphone"
      flat
      hide-details
      label="Search"
      prepend-inner-icon="mdi-magnify"
      solo-inverted
    ></v-text-field>
    <v-spacer></v-spacer>
    <v-btn text>
      <span class="mr-2" @click="handleLogout">Logout</span>
      <v-icon>mdi-logout</v-icon>
    </v-btn>
    <Login />
  </v-app-bar>
</template>

<script>
import Login from "./Login";
import { mapState, mapMutations } from "vuex";

export default {
  name: "TheToolbar",
  components: {
    Login
  },
  data: () => ({}),
  computed: {
    logged() {
      return this.$store.state.user.logged;
    }
  },
  methods: {
    ...mapMutations("user", ["UPDATE_DRAWER", "UPDATE_LOGGED"]),
    handleLogo() {
      this.$router.replace("/");
    },
    handleDrawer() {
      this.UPDATE_DRAWER();
    },
    handleLogout() {
      this.UPDATE_LOGGED();
    }
  }
};
</script>

<style scoped>
</style>