<template>
  <v-app-bar app clipped-left>
    <v-app-bar-nav-icon v-if="logged" @click.stop="handleDrawer"></v-app-bar-nav-icon>
    <v-btn text @click="handleLogo">
      <v-toolbar-title class="headline text-uppercase">
        <span>Free</span>
        <span class="font-weight-light">Market</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-btn>
    <v-spacer></v-spacer>
    <!-- <v-text-field
      append-icon="mdi-microphone"
      flat
      hide-details
      label="Search"
      prepend-inner-icon="mdi-magnify"
      solo-inverted
    ></v-text-field> -->
    <v-spacer></v-spacer>
    <v-btn text v-if="logged">
      <span class="mr-2" @click="handleLogout">Logout</span>
      <v-icon>mdi-logout</v-icon>
    </v-btn>
    <Login v-if="!logged"/>
  </v-app-bar>
</template>

<script>
import Login from "./Login";
import { mapState, mapMutations } from "vuex";
import User from '../services/user'

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
    ...mapMutations("user", ["UPDATE_DRAWER", "UPDATE_LOGOUT", 'UPDATE_STATUS', 'UPDATE_USER']),
    handleLogo() {
      this.$router.replace("/");
    },
    handleDrawer() {
      this.UPDATE_DRAWER();
    },
    async handleLogout() {
      const user = this.$getItem('userInfo');
      const id = user._id;
      try {
        let ret = await User.logout(id);
        console.log('ret', ret);
        if(ret.success){
          this.UPDATE_LOGOUT();
          this.$router.replace('/', () => {});
          this.$setItem('logged', false);
          this.$setItem('userInfo', {});
        }
      } catch (e) {
        console.log(e);
      }
    }
  },
  async created() {
    let log = await this.$getItem('logged');
    log ? this.UPDATE_STATUS(log) : ''
    let userInfo = await this.$getItem('userInfo');
    userInfo ? this.UPDATE_USER(userInfo) : ''
  }
};
</script>

<style scoped>
</style>