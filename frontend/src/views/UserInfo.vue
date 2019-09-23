<template>
  <v-container>
    <v-layout class="align-center justify-center">
      <v-card max-width="800px" elevation="10">
        <v-card-title>Editar Perfil</v-card-title>
        <v-divider class="mx-4"></v-divider>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field label="Name" prepend-icon="mdi-account" v-model="user.name"></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-text-field label="Email" prepend-icon="mdi-email" v-model="user.email"></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-text-field label="Profile Photo (URL)" prepend-icon="mdi-image" v-model="user.profilePhoto"></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-text-field label="Phone" prepend-icon="mdi-phone" v-model="user.phone"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-divider class="mx-4"></v-divider>
        <v-card-actions class="mt-4">
          <v-container>
            <v-layout class>
              <div class="flex-grow-1"></div>
              <v-btn min-width="200px" style="background-color: #212121" @click="handleUpdate">
                <span class="white--text">Salvar</span>
              </v-btn>
            </v-layout>
          </v-container>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
  import {mapState, mapMutations} from 'vuex';
  import User from '../services/user'

export default {
  name: "UserInfo",
  components: {},
  data: () => ({
    user: {
      name: '',
      email: '',
      profilePhoto: '',
      phone: '',
    }
  }),
  computed: {
    ...mapState('user', ['userInfo']),
  },
  async created() {
    this.user = await this.$getItem('userInfo');
  },
  methods: {
    ...mapMutations('user', ['UPDATE_BASE_SNACKBAR']),

    
    async handleUpdate() {
      const userInfo = await this.$getItem('userInfo');
      const id = userInfo._id;
      console.log('Update User Sent', this.user)
      console.log('User Id', id);
      try {
        let ret = await User.updateUser(id, this.user);
        if(ret.success) {
          this.UPDATE_BASE_SNACKBAR({
            open: true,
            text: 'Your change was successful'
          })
          await this.$setItem('userInfo', ret.user);
        }
      } catch (e) {
        console.log('eerrr', e);
      }
    }
  }
};
</script>
