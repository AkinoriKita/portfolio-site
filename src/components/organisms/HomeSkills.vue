<template>
  <div class="b-color">
    <v-container class="mt-16 mb-16">
      <p class="text-h3 text-center">SKILL</p>
      <p class="text-h6 text-center mb-16">できること</p>
      <skill-card :skills="skills"></skill-card>
    </v-container>
  </div>
</template>

<script>
import SkillCard from '@/components/molecules/SkillCard.vue'
export default {
  data() {
    return {
      skills: [
        {
          id: 1,
          title: 'HTML5',
          icon: ['mdi-language-html5'],
          description: 'HTMLでのサイト作成、SEO対策を考慮したマークアップができます。',
        },
        {
          id: 2,
          title: 'CSS3',
          icon: ['mdi-language-css3'],
          description: 'CSSの記述、基本的なプロパティ、CSSアニメーションが扱えます。',
        },
        {
          id: 3,
          title: 'JavaScript・jQuery・Vue',
          icon: [
            'mdi-language-javascript',
            'mdi-jquery',
            'mdi-vuejs'
          ],
          description: 'JSでは動的なWebサイトの作成、ajaxでの非同期通信ができます。Vueでは基本的な操作に加えて、VueRouterやVuexの簡単な操作ができます。',
        },
        {
          id: 4,
          title: 'PHP・Laravel',
          icon: [
            'mdi-language-php',
            'mdi-laravel'
          ],
          description: '基本的な関数の使用、フォーム作成、DB接続、外部APIの呼び出し等ができます。',
        },
        {
          id: 5,
          title: 'WordPress',
          icon: ['mdi-wordpress'],
          description: '以前ブログ運営を通して得た知識や訓練校での制作経験があります。Webページの作成、編集ができます。',
        },
        {
          id: 6,
          title: 'SEO',
          icon: ['mdi-magnify'],
          description: '以前クラウドソーシングサイトでライティングをしていた経験やブログ運営の経験があるため、SEOの基礎的な知識があります。',
        },
      ]
    }
  },
  components: {
    'skill-card': SkillCard
  }
}
</script>

<style scoped lang="scss">
.b-color {
  background-color: #e7e7ec;
}
</style>