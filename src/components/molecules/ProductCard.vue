<template>
  <div>
    <v-row justify="center">
      <div v-for="product in products" :key="product.id">
        <v-col cols=12>
          <v-card elevation="2" max-width="300">
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
              <v-btn class="mr-6" elevation="2" :href="product.github" target="_blank">GitHub</v-btn>

              <v-dialog :retain-focus="false" v-model="dialog" width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on.stop="on">
                    作品のポイント
                  </v-btn>
                </template>

                <v-card>

                  <v-card-title class="text-h5">
                    {{ product.modalTitle }}
                  </v-card-title>
                  <v-img class="mb-4" :src="product.modalImage"></v-img>
                  <v-card-text class="black--text text--darken-4">
                    {{ product.modalText }}
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="dialog = false">
                      閉じる
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

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
      dialog: false,
    }
  },
  props: [
    'products'
  ],
}
</script>

<style>

</style>