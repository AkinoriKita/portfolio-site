<template>
  <div>
    <v-row justify="center">
      <div v-for="product in products" :key="product.id">
        <v-col cols=12>
          <v-card class="mx-auto my-12" max-width="374">
            <a :href="product.url">
              <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
            </a>
            <v-card-title>{{ product.title }}</v-card-title>
            <v-card-text class="black--text text--darken-4">
              {{ product.description }}
            </v-card-text>
            <v-card-text class="black--text text--darken-4">
              製作期間:
              {{ product.period }}
            </v-card-text>
            <v-card-text>
              <v-btn elevation="2" :href="product.github" target="_blank">GitHub</v-btn>
            </v-card-text>
            <v-card-text>
              <v-chip-group column>
                <v-chip v-for="lang in product.langs" :key="lang" color="red" text-color="white">
                  {{ lang }}
                </v-chip>
              </v-chip-group>
            </v-card-text>
          </v-card>
        </v-col>
      </div>
    </v-row>
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