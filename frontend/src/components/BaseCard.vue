<template>
  <v-card width="450px">
    <v-card-text>
      <v-layout>
        <v-flex xs9 md7 sm5 class="flex-grow-1">
          <v-layout class="align-center justify-center">
            <v-img
              :src=image
              aspect-ratio="1"
              class="grey lighten-2"
              max-width="500"
              max-height="300"
            ></v-img>
          </v-layout>
        </v-flex>
        <v-flex xs3 md5 sm7>
          <v-card flat color="white">
            <v-card-text>
              <v-layout column>
                <span class="black--text overline mb-2">Novo - {{unities}} unidades</span>
                <span class="black--text caption mb-4" style="line-height: 1">{{ name }}</span>
                <span class="black--text font-weight-medium overline mb-3">{{ description }}</span>
                <span class="black--text font-weight-medium overline mb-3">R$ {{ price }}</span>
                <span class="black--text font-weight-bold overline mb-2">
                  <v-icon color="black" class="mr-1" small>mdi-credit-card-outline</v-icon>
                  12 x R$ {{Math.round((price/12) * 100.0) / 100}} sem juros
                </span>
                <span class="black--text font-weight-bold">
                  <v-icon color="black" class="mr-2" small>mdi-truck-delivery</v-icon>Frete grátis
                </span>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions>
      <v-btn block style="background-color: #212121">
        <span class="white--text">Comprar</span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "BaseCard",
  props: {
    name: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    publishedAt: {
      type: String,
      default: ""
    },
    price: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    },
    unities: {
      type: String,
      default: "1"
    },
    sellerName: {
      type: String,
      default: ""
    },
    sellerPhoto: {
      type: String,
      default: ""
    },
  },
  data() {
    return {
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>
