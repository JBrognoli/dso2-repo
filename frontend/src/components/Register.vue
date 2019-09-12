<template>
  <v-container>
    <v-layout text-center wrap justify-center>
      <v-card class="cardOpacity" height="320px" width="450px">
        <v-card-title class="justify-center">
          <span>Register! :)</span>
        </v-card-title>
        <v-card-text>
          <v-form
            ref="loginForm"
            v-model="registerFormValid"
            :lazy-validation="lazy"
          >
            <v-text-field
              class="mt-4"
              v-model="register.email"
              label="Login(Email)"
              outlined
            ></v-text-field>
            <v-text-field
              v-model="register.password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              label="Password"
              outlined
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn color="grey" class="mr-4" @click="handleRegister">Cadastrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
  import {mapMutations} from 'vuex';

  export default {
    data: () => ({
      register: {
        email: '',
        password: ''
      },
      show1: false,
      registerFormValid: '',
    }),
    methods: {
      ...mapMutations('user', ['UPDATE_BASE_SNACKBAR']),
      handleRegister() {
        this.UPDATE_BASE_SNACKBAR({
          open: true,
          text: 'Usuário criado com sucesso'
        })
      }
    }
  };
</script>

<style scoped>
  .cardOpacity {
    opacity: 0.85;
  }
</style>