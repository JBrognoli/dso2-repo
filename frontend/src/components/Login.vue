<template>
  <div class="text-center">
    <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-y>
      <template v-slot:activator="{ on }">
        <v-btn text v-on="on">
          <span class="mr-2">Log In</span>
          <v-icon>mdi-login</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-tabs fixed-tabs>
          <v-tab>Register</v-tab>
          <v-tab>Login</v-tab>
            <!-- REGISTER TAB -->
          <v-tab-item>
            <v-card class="cardOpacity">
              <v-card-title class="justify-center">
                <span class="title">Register! :)</span>
              </v-card-title>
              <v-divider />
              <v-card-text>
                <v-form
                  ref="loginForm"
                  v-model="register.registerFormValid"
                  :lazy-validation="register.lazy"
                >
                  <v-text-field v-model="register.form.email" label="Login(Email)"></v-text-field>
                  <v-text-field
                    v-model="register.form.password"
                    :append-icon="register.show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="register.show1 ? 'text' : 'password'"
                    label="Password"
                    @click:append="register.show1 = !register.show1"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn text @click="menu = false">Cancel</v-btn>
                <v-btn color="primary" text @click="handleRegister">Register</v-btn>
              </v-card-actions>
            </v-card>
          </v-tab-item>
          <!-- LOGIN TAB -->
          <v-tab-item>
            <v-card>
              <v-card-title class="justify-center">
                <span class="title">Login! :)</span>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text class="pt-0">
                <v-form ref="loginForm" v-model="login.loginFormValid" :lazy-validation="login.lazy">
                  <v-text-field class="mt-4" v-model="login.form.email" label="Login(Email)"></v-text-field>
                  <v-text-field
                    v-model="login.form.password"
                    :append-icon="login.showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="login.showPassword ? 'text' : 'password'"
                    label="Password"
                    hint="At least 8 characters"
                    @click:append="login.showPassword = !login.showPassword"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn text @click="menu = false">Cancel</v-btn>
                <v-btn color="primary" text @click="handleLogin">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
  name: "Login",
  components: {
  },
  data: () => ({
    menu: false,
    login: {
      form: {
        email: "",
        password: ""
      },
      showPassword: false,
      loginFormValid: ""
    },
    register: {
      form: {
        email: "",
        password: ""
      },
      show1: false,
      registerFormValid: "",
      lazy: false
    }
  }),
  methods: {
    ...mapMutations("user", ["UPDATE_BASE_SNACKBAR"]),
    handleRegister() {
      this.UPDATE_BASE_SNACKBAR({
        open: true,
        text: "Usuário criado com sucesso"
      });
      this.menu = false;
    },
    handleLogin() {
      this.UPDATE_BASE_SNACKBAR({
        open: true,
        text: "Usuário logado com sucesso"
      });
      this.menu = false;
    }
  }
};
</script>

<style scoped>
</style>
