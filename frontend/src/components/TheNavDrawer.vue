<template>
    <v-navigation-drawer v-model="navDrawer" app clipped>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">{{userName}}</v-list-item-title>
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
import { mapState } from "vuex";

export default {
  name: "TheNavDrawer",
  components: {},
  props: {
    userName: {
      type: String,
      default: "Caio Araujo"
    }
  },
  data: () => ({}),
  computed: {
    ...mapState("user", ["navDrawer"])
  },
  methods: {
    handleProducts() {
      this.$router.replace("/userHome");
    },
    handleInfo() {
      this.$router.replace('/userInfo')
    }
  }
};
</script>
