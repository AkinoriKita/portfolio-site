<template>
  <div class="b-color">
    <v-container>
      <p class="text-h3 text-center">Products</p>
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
          img: '',
          description: 'ユーザ側と管理者側のマルチログイン機能付きECサイトです。ログイン機能はJetstream、カート機能はStripeで実装しました。',
          url: 'https://laravelec.kitaakinori.com/',
          langs: [
            'Laravel8',
            'Tailwind',
            'MySQL'
          ],
          period: '約2週間',
          github: 'https://github.com/AkinoriKita/laravel_ec',
          modalTitle: '',
          modalImage: '',
          modalText: '',
        },
        {
          id: 2,
          title: 'コーポレートサイト',
          img: '',
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
          modalTitle: '架空のカフェのコーポレートサイトです。フォームにてPHPでのDB接続を行っています。',
          modalImage: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
          modalText: '架空のカフェのコーポレートサイトです。フォームにてPHPでのDB接続を行っています。',
        },
        {
          id: 3,
          title: 'ポートフォリオサイト',
          img: '',
          description: '当ポートフォリオサイトです。',
          url: '',
          langs: [
            'Vue2',
            'Vuetify'
          ],
          period: '約2日',
          github: 'https://github.com/AkinoriKita/portfolio-site',
          modalTitle: '',
          modalImage: '',
          modalText: '',
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