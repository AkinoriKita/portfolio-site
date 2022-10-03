<template>
  <div class="b-color">
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
          title: 'Shopサイト',
          img: require('@/assets/laravelec.jpg'),
          description: 'ユーザ側と管理者側のマルチログイン機能付きECサイトです。ログイン機能はJetstream、カート機能はStripeで実装しました。',
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
          title: 'コーポレートサイト',
          img: require('@/assets/cafe.jpg'),
          description: '架空のカフェのコーポレートサイトです。フォームにてPHPでのDB接続を行っています。',
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
          img: require('@/assets/portfolio.jpg'),
          description: '当ポートフォリオサイトです。',
          url: '',
          langs: [
            'Vue2',
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

<style scoped lang="scss">
.b-color {
  background-color: #e7ecec;
}
</style>