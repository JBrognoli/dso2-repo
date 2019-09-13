<template>
  <v-container class="pt-0">
    <v-layout class="align-center justify-center">
      <Carousel></Carousel>
    </v-layout>
  </v-container>
</template>

<script>
  import Carousel from '../components/Carousel'

  export default {
    components: {
      Carousel
    },
    data: () => ({})
  };
</script>
