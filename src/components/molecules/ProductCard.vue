<template>
  <div>
    <v-row justify="center">
      <div v-for="product in products" :key="product.id">
        <v-col cols=12>
          <v-card elevation="2" :width="width">
            <a :href="product.url" target="_blank">
              <v-img height="250" :src="product.img"></v-img>
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
              <v-btn class="mr-6 mb-2" elevation="2" :href="product.url" target="_blank">このサイトへ行く</v-btn>
              <v-btn class="mr-6 mb-2" :to="product.route">作品の詳細</v-btn>
              <v-btn class="mb-2" elevation="2" :href="product.github" target="_blank">GitHub</v-btn>

            </v-card-text>
            <v-card-text>
              <v-chip-group column>
                <v-chip v-for="lang in product.langs" :key="lang" color="red lighten-2" text-color="white">
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
  data() {
    return {
    }
  },
  props: [
    'products'
  ],
  computed: {
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 300
        default: return 500
      }
    },
  }
}
</script>

<style>

</style>