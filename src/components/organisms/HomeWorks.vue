<template>
  <div class="b-color" id="works">
    <v-container class="mt-16 mb-16">
      <p class="text-h3 text-center">WORKS</p>
      <p class="text-h6 text-center mb-16">制作したもの</p>
      <product-card :products="products"></product-card>
    </v-container>
  </div>
</template>

<script>
import ProductCard from '@/components/molecules/ProductCard.vue'

export default {
  data() {
    return {
      products: [
        {
          id: 1,
          title: 'ECサイト',
          img: require('@/assets/ec/usertop.png'),
          description: 'ユーザ側と管理者側のマルチログイン機能付きECサイトです。',
          url: 'https://laravelec.kitaakinori.com/',
          langs: [
            'Laravel8',
            'Tailwind',
            'MySQL'
          ],
          period: '約2週間',
          github: 'https://github.com/AkinoriKita/laravel_ec',
          route: 'shop',

        },
        {
          id: 2,
          title: 'Cafeサイト',
          img: require('@/assets/cafe/top.png'),
          description: '架空のカフェのコーポレートサイトです。',
          url: 'https://cafe.kitaakinori.com/',
          langs: [
            'HTML',
            'CSS',
            'JavaScript',
            'jQuery',
            'PHP',
            'MySQL'
          ],
          period: '約1週間',
          github: 'https://github.com/AkinoriKita/cafe',
          route: 'cafe',
        },
        {
          id: 3,
          title: 'ポートフォリオサイト',
          img: require('@/assets/portfolio/top.png'),
          description: '当ポートフォリオサイトです。',
          url: 'https://kitaakinori.com/',
          langs: [
            'Vue2',
            'VueRouter',
            'Vuetify'
          ],
          period: '約3日',
          github: 'https://github.com/AkinoriKita/portfolio-site',
          route: 'portfolio',
        },
      ]
    }
  },
  components: {
    'product-card': ProductCard
  }
}
</script>

<style scoped>
.b-color {
  background-color: #e7ecec;
}
</style>