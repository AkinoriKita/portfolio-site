<template>
  <div class="b-color" id="skills">
    <v-container class="mt-16 mb-16">
      <v-row justify="center">
        <v-col cols=12 sm=10 md=8 lg=4 xl=3>
          <p class="text-h3 text-center">SKILLS</p>
          <p class="text-h6 text-center mb-16">できること</p>
        </v-col>
        <skill-card :skills="skills"></skill-card>
      </v-row>
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
          description: '関数の使用、フォーム作成、DB接続、外部APIの呼び出し等ができます。',
        },
        {
          id: 5,
          title: 'MySQL',
          icon: ['mdi-database-search'],
          description: 'テーブル作成やリレーションなどのデータベース操作、SQL文の記入ができます。',
        },
        {
          id: 6,
          title: 'WordPress',
          icon: ['mdi-wordpress'],
          description: '以前ブログ運営を通して得た知識や訓練校での制作経験があります。Webページの作成、編集ができます。',
        },
        {
          id: 7,
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

<style scoped>
.b-color {
  background-color: #e7e7ec;
}
</style>