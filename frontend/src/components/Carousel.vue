<template>
  <v-flex >
    <v-card width="60%" elevation="10" class="mx-auto">
      <v-carousel :cycle="cycle" :show-arrows="false" height="450px">
        <v-carousel-item v-for="item in items" :key="item._id">
          <v-list two-line>
            <v-list-item>
              <v-list-item-avatar>
                <v-img :src="item.owner.profilePhoto || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxc36HkPwSHSLpwROxkkDmhVtewIUD84Jd1WjTgiXSeInRIdFi'" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{item.owner.name || item.owner.email}}</v-list-item-title>
                <v-list-item-subtitle>Seller</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-layout>
            <v-flex xs9 md7 sm5 class="flex-grow-1">
              <v-layout class="align-center justify-center">
                <v-img
                  :src="item.image || 'https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'"
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
                    <span class="black--text caption mb-2">Novo - {{item.unities}} unidades</span>
                    <span class="black--text title mb-4" style="line-height: 1">{{item.name}}</span>
                    <span class="black--text font-weight-medium mb-3">{{item.description}}</span>
                    <span class="black--text font-weight-medium mb-3">R$ {{item.price}}</span>
                    <span class="black--text font-weight-bold mb-2">
                      <v-icon color="black" class="mr-1">mdi-credit-card-outline</v-icon>
                      12 x R$ {{Math.round((item.price/12) * 100) / 100}} sem juros
                    </span>
                    <span class="black--text font-weight-bold">
                      <v-icon color="black" class="mr-2">mdi-truck-delivery</v-icon>Frete grátis
                    </span>
                  </v-layout>
                </v-card-text>
                <v-card-actions>
                  <v-btn block @click="buyItem(item._id)">Comprar</v-btn>
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
  import User from '../services/user'
  import {mapMutations} from 'vuex';

export default {
  name: "Carrousel",
  data: () => ({
    cycle: false,
    items: []
  }),
  async created() {
    try {
      let ret = await User.readAllProducts();
      this.items = ret.slice(-3);
      console.log('ret carrouselreadprods', ret);
    } catch (e) {
      this.UPDATE_BASE_SNACKBAR({
          open: true,
          text: 'Error on loading carrouselProducts'
        })
    }
  },
  methods: {
    ...mapMutations('user', ['UPDATE_BASE_SNACKBAR']),
    async buyItem(itemId) {
      try {
        const userInfo = await this.$getItem('userInfo');
        const userId = userInfo._id;
        let ret = await User.buyItem(userId, itemId);
        console.log('ret buy', ret);
        this.UPDATE_BASE_SNACKBAR({
          open: true,
          text: 'Purchase confirmed'
        })
      } catch (e) {
        this.UPDATE_BASE_SNACKBAR({
          open: true,
          text: 'Unable to make the purchase'
        })
      }
    }
  }
};
</script>

<style scoped>
</style>
