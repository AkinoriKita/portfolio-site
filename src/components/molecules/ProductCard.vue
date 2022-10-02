<template>
  <div>
     <v-card
    class="mx-auto my-12"
    max-width="550"
    v-for="product in products"
        :key="product.id"
  >
    <!-- <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template> -->

    <a :href="product.url">
      <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>
    </a>

    <v-card-title>{{ product.title }}</v-card-title>
    <v-card-text>
      <div>{{ product.description }}</div>
    </v-card-text>

    <v-card-text>
      <v-chip-group
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>HTML</v-chip>

        <v-chip>CSS</v-chip>

        <v-chip>JS</v-chip>

        <v-chip>Vue</v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: [
    'products'
  ]
}
</script>

<style>

</style>