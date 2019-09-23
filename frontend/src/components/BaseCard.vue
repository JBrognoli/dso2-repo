<template>
  <v-card width="470px">
    <v-card-text>
      <v-layout>
        <v-flex xs9 md7 sm5 class="flex-grow-1">
          <v-layout class="align-center justify-center">
            <v-img
              :src="image"
              aspect-ratio="1"
              class="grey lighten-2"
              max-width="500"
              max-height="300"
            ></v-img>
          </v-layout>
        </v-flex>
        <v-flex xs3 md5 sm7>
          <v-card flat>
            <v-card-text>
              <v-layout column>
                <span class="caption mb-2">New - {{unities}} unidades</span>
                <span class="body-2 mb-4" style="line-height: 1">{{ name }}</span>
                <span class="font-weight-medium caption mb-3">{{ description }}</span>
                <span class="font-weight-medium caption mb-3">R$ {{ price }}</span>
                <span class="font-weight-bold caption mb-2">
                  <v-icon color="black" class="mr-1" small>mdi-credit-card-outline</v-icon>
                  12 x R$ {{Math.round((price/12) * 100.0) / 100}} sem juros
                </span>
                <span class="font-weight-bold">
                  <v-icon color="black" class="mr-2" small>mdi-truck-delivery</v-icon>Free Shipping
                </span>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions>
      <v-btn block style="background-color: #212121" @click="buyItem(id)">
        <span class="white--text">Comprar</span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import User from "../services/user";
import { mapMutations } from "vuex";

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
    id: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations("user", ["UPDATE_BASE_SNACKBAR"]),
    async buyItem(itemId) {
      console.log("Entrou");
      console.log("XD", itemId);
      try {
        const userInfo = await this.$getItem("userInfo");
        const userId = userInfo._id;
        let ret = await User.buyItem(userId, itemId);
        console.log("ret buy", ret);
        this.UPDATE_BASE_SNACKBAR({
          open: true,
          text: "Purchase confirmed"
        });
      } catch (e) {
        this.UPDATE_BASE_SNACKBAR({
          open: true,
          text: "Unable to make the purchase"
        });
      }
    }
  }
};
</script>

<style scoped>
</style>
