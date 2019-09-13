<template>
  <div>
    <v-snackbar v-model="baseSnackbar.open" :timeout="3500" right>
      {{ baseSnackbar.text }}
      <v-btn
        color="white"
        text
        @click="snackbar = false"
      >
        <span @click="handleCloseSnackbar">Close</span>
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex';

  export default {
    name: "BaseSnackbar",
    data() {
      return {};
    },
    computed: {
      ...mapState('user', ['baseSnackbar']),
    },
    methods: {
      ...mapMutations('user', ['UPDATE_BASE_SNACKBAR']),
      handleCloseSnackbar() {
        this.UPDATE_BASE_SNACKBAR({
          open: false,
          text: ''
        })
      }
    }
  };
</script>

<style scoped>

</style>
