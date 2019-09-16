<template>
  <v-data-table :headers="headers" :items="products" sort-by="price" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Products</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <div class="flex-grow-1"></div>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }" >
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
                      v-model="editedItem.imageURL"
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
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>

<script>
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
      { text: "Price", value: "price", align: "left" },
      { text: "Description", value: "description" },
      { text: "Image URL", value: "imageURL"},
      { text: "Actions", value: "action", sortable: false }
    ],
    products: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      price: "",
      description: "",
      imageURL: ""
    },
    defaultItem: {
      name: "",
      price: "",
      description: "",
      imageURL: ""
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

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.products = [
        {
          name: "Pacote de viagem",
          price: "150.00",
          description: "Viagem para a disney com tudo pago.",
          imageURL: ""
        },
        {
          name: "SSD Sandisk 240gb",
          price: "237.33",
          description: "HD SSD 240GB para Notebooks",
          imageURL: ""
        },
        {
          name: "Curso Rocket Seat",
          price: "5060.00",
          description: "Introdução a fullstack React + Node + React Native",
          imageURL: ""
        }
      ];
    },

    editItem(item) {
      this.editedIndex = this.products.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.products.indexOf(item);
      confirm("Are you sure you want to delete this product?") &&
        this.products.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.products[this.editedIndex], this.editedItem);
      } else {
        this.products.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>
