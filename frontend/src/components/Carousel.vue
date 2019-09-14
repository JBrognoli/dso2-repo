<template>
  <v-flex >
    <v-card width="70%" elevation="10" class="mx-auto">
      <v-carousel :cycle="cycle" :show-arrows="false" height="450px">
        <v-carousel-item v-for="(item, index) in items" :key="index">
          <v-list two-line>
            <v-list-item>
              <v-list-item-avatar>
                <v-img :src="item.sellerPhoto" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{item.sellerName}}</v-list-item-title>
                <v-list-item-subtitle>Seller</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-layout>
            <v-flex xs9 md7 sm5 class="flex-grow-1">
              <v-layout class="align-center justify-center">
                <v-img
                  :src="item.image"
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
                    <span class="black--text caption mb-2">Novo - 50 unidades</span>
                    <span class="black--text title mb-4" style="line-height: 1">{{item.name}}</span>
                    <span class="black--text font-weight-medium mb-3">R${{item.price}}</span>
                    <span class="black--text font-weight-bold mb-2">
                      <v-icon color="black" class="mr-1">mdi-credit-card-outline</v-icon>
                      12x {{Math.round((item.price/12) * 100) / 100}} sem juros
                    </span>
                    <span class="black--text font-weight-bold">
                      <v-icon color="black" class="mr-2">mdi-truck-delivery</v-icon>Frete grátis
                    </span>
                  </v-layout>
                </v-card-text>
                <v-card-actions>
                  <v-btn block>Comprar</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-carousel-item>
      </v-carousel>
    </v-card>
  </v-flex>
</template>
<script>
export default {
  name: "Carrousel",
  data: () => ({
    cycle: false,
    items: [
      {
        sellerName: "Joao Brognoli",
        sellerPhoto:
          "https://i.kym-cdn.com/entries/icons/facebook/000/000/763/Dibujo.jpg",
        id: "1",
        name: "Product name 1",
        description: "Product description 1",
        owner: "Product owner 1",
        publishedAt: "13/09/2019",
        price: "399.99",
        image: "https://picsum.photos/id/11/500/300"
      },
      {
        sellerName: "Guilherme de Liz",
        sellerPhoto: "",
        id: "2",
        name: "Product name 2",
        description: "Product description 2",
        owner: "Product owner 2",
        publishedAt: "12/09/2019",
        price: "575.00",
        image:
          "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/05/Wyvern-programming-languages-in-one.jpg"
      },
      {
        sellerName: "Alfeu Gonçalves",
        sellerPhoto: "",
        id: "3",
        name: "Product name 3",
        description: "Product description 3",
        owner: "Product owner 3",
        publishedAt: "11/09/2019",
        price: "1051.50",
        image:
          "https://a-static.mlcdn.com.br/618x463/kit-imperio-3x-cervejas-imperio-gold-puro-malte-210ml-e-3x-cerveja-imperio-lager-puro-malte-275ml-cervejaria-cidade-imperial/emporiumgourmet2/1348/d6dd2c3eb7275b4fb4de744908e36ec7.jpg"
      }
    ]
  })
};
</script>

<style scoped>
</style>
