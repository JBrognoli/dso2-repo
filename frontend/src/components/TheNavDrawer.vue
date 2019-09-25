<template>
  <v-navigation-drawer :value="navDrawer" app clipped>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">{{(userInfo.name || userInfo.email)}}</v-list-item-title>
        <v-list-item-subtitle>profile</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item link @click="handleProducts">
        <v-list-item-icon>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Products</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link @click="handleInfo">
        <v-list-item-icon>
          <v-icon>mdi-help-box</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Account</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <v-list>
        <v-list-item link @click="handleTheme">
          <v-list-item-icon>
            <v-icon>mdi-brightness-6</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Theme</v-list-item-title>
          </v-list-item-content>
          <v-list-item-avatar>
            <v-switch class="pt-3" color="black" v-model="darkTheme" @click="handleTheme"></v-switch>
          </v-list-item-avatar>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "TheNavDrawer",
  components: {},
  data: () => ({
    userName: "",
    userEmail: "",
  }),
  computed: {
    ...mapState("user", ["navDrawer", "userInfo", "darkTheme"])
  },
  methods: {
    ...mapMutations('user', ['UPDATE_THEME']),
    handleProducts() {
      this.$router.push("/userHome", () => {});
    },
    handleInfo() {
      this.$router.push("/userInfo", () => {});
    },
    async handleTheme() {
      console.log('a')
      this.theme = !this.darkTheme
      await this.$setItem('darkTheme', this.theme)
      this.UPDATE_THEME(this.theme);
      location.reload();
    }
  },
  async created() {
    this.theme = this.$store.state.user.darkTheme
    let userInfo = await this.$getItem("userInfo");
    if (userInfo) {
      this.userName = userInfo.name;
      this.userEmail = userInfo.userEmail;
    } else {
      this.userEmail = "usuario@email.com";
    }
  }
};
</script>
