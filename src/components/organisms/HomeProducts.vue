<template>
  <div>
    <v-container>
        <p class="text-h2 text-center">Products</p>
      <v-row>
        <v-col>
          <product-card cols=12 sm=12 md=6 lg=4
          :products="products"></product-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProductCard from '@/components/molecules/ProductCard.vue'

export default {
  data(){
    return {
      products: [
        {
          id: 1,
          title: 'タイトル1',
          description: 'テキスト1テキスト1テキスト1テキスト1テキスト1テキスト1テキスト1テキスト1テキスト1テキスト1テキスト1テキスト1',
          url: 'https://cafe.kitaakinori.com/',

        },
        {
          id: 2,
          title: 'タイトル2',
          description: 'テキスト2',
          url: 'https://cafe.kitaakinori.com/',

        },
        {
          id: 2,
          title: 'タイトル3',
          description: 'テキスト3',
          url: 'https://laravelec.kitaakinori.com/',

        },
      ]
    }
  },
  components: {
    'product-card': ProductCard
  }
}
</script>

<style>

</style>