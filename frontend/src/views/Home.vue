<template>
  <v-container class="pt-0" fluid>
    <v-layout class="align-center justify-center">
      <Carousel></Carousel>
    </v-layout>
    <v-layout class="mt-5 align-center justify-center">
      <v-btn class="ml-3" fab>
        <v-icon dark x-large>mdi-arrow-left-bold</v-icon>
      </v-btn>
      <v-flex>
        <v-layout justify-space-around>
          <ul v-for="(baseCard, key) in baseCards" :key="key" class="pa-0">
            <BaseCard
              :name="baseCard.name"
              :description="baseCard.description"
              :publishedAt="baseCard.publishedAt"
              :price="baseCard.price"
              :image="baseCard.image"
              :sellerName="baseCard.sellerName"
              :sellerPhoto="baseCard.sellerPhoto"
            ></BaseCard>
          </ul>
        </v-layout>
      </v-flex>
      <v-btn class="ml-3" fab>
        <v-icon dark x-large>mdi-arrow-right-bold</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import Carousel from "../components/Carousel";
import BaseCard from "../components/BaseCard";

export default {
  components: {
    Carousel,
    BaseCard
  },
  data: () => ({
    baseCards: [
      {
        sellerName: "Test1",
        sellerPhoto:
          "https://i.kym-cdn.com/entries/icons/facebook/000/000/763/Dibujo.jpg",
        id: "1",
        name: "Product name 1",
        description: "Product description 1",
        publishedAt: "13/09/2019",
        price: "399.99",
        image: "https://picsum.photos/id/11/500/300"
      },
      {
        sellerName: "test2",
        sellerPhoto:
          "https://i.kym-cdn.com/entries/icons/facebook/000/000/763/Dibujo.jpg",
        id: "2",
        name: "Product name 2",
        description: "Product description 2",
        publishedAt: "12/09/2019",
        price: "575.00",
        image:
          "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/05/Wyvern-programming-languages-in-one.jpg"
      },
      {
        sellerName: "Teste Testante",
        sellerPhoto: "",
        id: "3",
        name: "Product name 3",
        description: "Product description 3",
        publishedAt: "11/09/2019",
        price: "3123.00",
        image:
          "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/05/Wyvern-programming-languages-in-one.jpg"
      }
    ]
  })
};
</script>
