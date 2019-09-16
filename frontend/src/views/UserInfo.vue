<template>
  <v-container>
    <v-layout class="align-center justify-center">
      <v-card max-width="800px" elevation="0">
        <v-card-title>Editar Perfil</v-card-title>
        <v-divider class="mx-4"></v-divider>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field label="Name" prepend-icon="mdi-account"></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-text-field label="Email" prepend-icon="mdi-email"></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-text-field label="Profile Photo (URL)" prepend-icon="mdi-image"></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-text-field label="Phone" prepend-icon="mdi-phone"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-divider class="mx-4"></v-divider>
        <v-card-actions class="mt-4">
          <v-container>
            <v-layout class>
              <div class="flex-grow-1"></div>
              <v-btn min-width="200px" style="background-color: #212121">
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
export default {
  name: "UserInfo",
  components: {},
  data: () => ({})
};
</script>
