<template>
  <v-data-table :headers="headers" :items="products" sort-by="price" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Products</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <div class="flex-grow-1"></div>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn dark class="mx-y" v-on="on">New Product</v-btn>
          </template>
          <v-card>
            <v-card-title style="background-color: #212121">
              <span class="headline white--text">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      v-model="editedItem.name"
                      label="Product name"
                      prepend-icon="mdi-alpha-n-box-outline"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      v-model="editedItem.price"
                      label="Price"
                      prepend-icon="mdi-cash-usd-outline"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      v-model="editedItem.description"
                      label="Description"
                      prepend-icon="mdi-pencil"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      v-model="editedItem.unities"
                      label="Unities"
                      prepend-icon="mdi-cart-plus"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      v-model="editedItem.image"
                      label="Image URL"
                      prepend-icon="mdi-file-image"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn text @click="close">Cancel</v-btn>
              <v-btn text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
      <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn style="background-color: #212121" @click="initialize"><span class="white--text">Reset</span></v-btn>
    </template>
  </v-data-table>
</template>

<script>
  import User from '../services/user'
  import Open from '../services/open'
  import { mapMutations } from 'vuex'

  export default {
    name: "UserHome",
    components: {},
    data: () => ({
      dialog: false,
      headers: [
        {
          text: "Product name",
          align: "left",
          sortable: true,
          value: "name"
        },
        {text: "Price", value: "price", align: "left"},
        {text: "Unities", value: "unities", align: "left"},
        {text: "Description", value: "description"},
        {text: "Actions", value: "action", sortable: false}
      ],
      products: [],
      editedIndex: -1,
      editedItem: {
        name: "",
        price: "",
        description: "",
        unities: "",
        image: ""
      },
      defaultItem: {
        name: "",
        price: "",
        description: "",
        unities: "",
        image: ""
      }
    }),
    computed: {
      formTitle() {
        return this.editedIndex === -1 ? "New Product" : "Edit Product";
      }
    },

    watch: {
      dialog(val) {
        val || this.close();
      }
    },

    async created() {
      const userInfo = await this.$getItem('userInfo');
      const user = {
        email: userInfo ? userInfo.email : "",
        password: userInfo ? userInfo.password : ""
      }
      let ret = await Open.logIn(user);
      this.$setItem('userInfo', ret.user);
      this.products = ret.user.products;
    },

    methods: {
      ...mapMutations('user', ['UPDATE_BASE_SNACKBAR']),
      initialize(ret) {
        this.products = ret;
      },

      editItem(item) {
        this.editedIndex = this.products.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialog = true;
      },

      async deleteItem(item) {
        const index = this.products.indexOf(item);
        try {
          let ret = await User.deleteItem(item._id);
          if(ret.success) {
            this.UPDATE_BASE_SNACKBAR({
            open: true,
            text: 'Item was deleted'
          })
          this.products.splice(index, 1);
          }
        } catch(e) {
          this.UPDATE_BASE_SNACKBAR({
            open: true,
            text: 'Unable to delete the item'
          })
        }      
      },

      close() {
        this.dialog = false;
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
        }, 300);
      },

      async save() {
        if (this.editedIndex > -1) {
          Object.assign(this.products[this.editedIndex], this.editedItem);
          console.log(this.editedItem);
          const id = this.editedItem._id;
          try {
            let ret = await User.updateProduct(id, this.editedItem);
            console.log('ret', ret);
          } catch (e) {
            console.log(e)
          }
        } else {
          console.log(this.editedItem);
          const userInfo = await this.$getItem('userInfo');
          const id = userInfo._id;
          console.log('ret sendingIt', this.editedItem)
          try {
            let ret = await User.createProduct(id, this.editedItem);
            await this.$setItem('userInfo', ret)
            console.log('retProd', ret)
            this.products.push(this.editedItem);
          } catch (e) {
            console.log('eerrr', e);
          }
        }
        this.close();
      }
    }
  };
</script>
