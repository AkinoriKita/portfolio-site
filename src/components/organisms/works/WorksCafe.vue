<template>
  <transition>
    <div>
      <div>
        <v-container class="mb-16">
          <v-row justify="center" align-content="center" class="text-center">
            <v-col cols=12 sm=10 md=8 lg=6>
              <p class="text-h3">架空のCafeサイト</p>
              <v-carousel class="mt-16" cycle :height="height" hide-delimiter-background show-arrows-on-hover>
                <v-carousel-item v-for="(img, i) in imgs" :key="i">
                  <v-img :src="img"></v-img>
                </v-carousel-item>
              </v-carousel>
              <ul class="text-left">
                <li class="mt-16">このサイトについて
                  <p class="mt-8">
                    架空のカフェのコーポレートサイトです。jQueryのpagePiling.jsを用いて1ページスクロール型のランディングページに仕上げました。<br>
                    ヘッダーナビゲーションの「ONLINE
                    SHOP」や「BEANS」の項目ではShopifyを使用して実際に購入ページへ行けるようにしています。（Shopifyのパスワードは"password"です。）<br>
                    フォームではPHPでデーターベース接続を行っており、送信した内容がMySQLのデータベースに保存されるようになっています。
                  </p>
                </li>
                <li class="mt-16">製作期間
                  <p class="mt-8">
                    約1週間
                  </p>
                </li>
                <li class="mt-16">使用言語など
                  <p class="mt-8">
                    HTML, CSS, JavaScript, jQuery, PHP, MySQL, Shopify
                  </p>
                </li>
                <li class="mt-16">作ってみての感想
                  <p class="mt-8">
                    プラグインを使用したWeb制作は初めてしました。プラグインの影響でうまくHTML/CSSを使えないことがあり、苦労しました。<br>
                    ですが、pagePiling.jsの英語ページを確認することで解消される問題も多かったので開発元のガイドをしっかりと読むことの大切さを学びました。
                  </p>
                </li>
              </ul>
              <div class="mt-16">
                <v-btn class="mr-6 mb-4 white--text" elevation="2" href="https://cafe.kitaakinori.com/" target="_blank"
                  color="#737676" x-large>このサイトへ行く</v-btn>
                <v-btn class="mr-6 mb-4" elevation="2" @click="$router.back()" x-large>戻る</v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        require('@/assets/cafe/top.png'),
        require('@/assets/cafe/shopify.png'),
        require('@/assets/cafe/form.png'),
      ],
    }
  },
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 130
        case 'sm': return 250
        case 'md': return 300
        case 'lg': return 300
        case 'xl': return 500
        default: return 500
      }
    },
  }
}
</script>

<style>

</style>