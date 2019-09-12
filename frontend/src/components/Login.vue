<template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-y
    >
      <template v-slot:activator="{ on }">
        <v-btn text v-on="on">
          <span class="mr-2">Login</span>
          <v-icon>mdi-login</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="title">Login into your account!</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="pt-0">
          <v-form
            ref="loginForm"
            v-model="loginFormValid"
            :lazy-validation="lazy"
          >
            <v-text-field
              class="mt-4"
              v-model="login.email"
              label="Login(Email)"
            ></v-text-field>
            <v-text-field
              v-model="login.password"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              label="Password"
              hint="At least 8 characters"
              @click:append="showPassword = !showPassword"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions >
          <div class="flex-grow-1"></div>
          <v-btn text @click="menu = false">Cancel</v-btn>
          <v-btn color="primary" text v-on:click="menu = false">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data: () => ({
      menu: false,
      login: {
        email: '',
        password: ''
      },
      showPassword: false,
      loginFormValid: '',
    }),
  }
</script>

<style scoped>

</style>