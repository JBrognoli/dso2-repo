<template>
  <v-container>
    <v-layout text-center wrap justify-center>
        <v-card class="cardOpacity" height="600px" width="400px">
            <v-card-title class="justify-center">
                <span>Cadastre-se! :)</span>
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field>
                </v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn color="grey" class="mr-4">Cadastrar</v-btn>
            </v-card-actions>
        </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style scoped>
.cardOpacity {
  opacity: 0.85;
}
</style>