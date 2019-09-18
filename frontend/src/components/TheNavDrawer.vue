<template>
  <v-navigation-drawer :value="navDrawer" app clipped>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">{{(userName || userEmail)}}</v-list-item-title>
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
  </v-navigation-drawer>
</template>

<script>
  import {mapState} from "vuex";

  export default {
    name: "TheNavDrawer",
    components: {},
    data: () => ({
      userName: '',
      userEmail: '',
    }),
    computed: {
      ...mapState("user", ["navDrawer", "userInfo"]),
    },
    methods: {
      handleProducts() {
        this.$router.push("/userHome");
      },
      handleInfo() {
        this.$router.push('/userInfo')
      }
    },
    async created() {
      let userInfo = await this.$getItem('userInfo');
      if (userInfo) {
        this.userName = userInfo.name
        this.userEmail = userInfo.userEmail
      } else {
        this.userEmail = "usuario@email.com"
      }
    }
  };
</script>
