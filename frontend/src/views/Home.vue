<template>
  <v-container  class="pt-0">
    <v-layout class="align-center justify-center">
      <Carousel></Carousel>
    </v-layout>
    <v-layout class="mt-5">
      <BaseCard></BaseCard>
    </v-layout>
  </v-container>
</template>

<script>
  import Carousel from '../components/Carousel'
  import BaseCard from '../components/BaseCard'

  export default {
    components: {
      Carousel,
      BaseCard
    },
    data: () => ({})
  };
</script>
