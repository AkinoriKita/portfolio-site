<template>
  <transition>
    <works-template
    :imgs=imgs
    :about=about
    :period=period
    :lang=lang
    :thoughts=thoughts
    :url=url></works-template>
  </transition>
</template>

<script>
import WorksTemplate from '@/components/pages/WorksPage.vue'
export default {
  data() {
    return {
      imgs: [
        require('@/assets/cafe/top.png'),
        require('@/assets/cafe/shopify.png'),
        require('@/assets/cafe/form.png'),
      ],
      about: `架空のカフェのコーポレートサイトです。jQueryのpagePiling.jsを用いて1ページスクロール型のランディングページに仕上げました。
ヘッダーナビゲーションの「ONLINESHOP」や「BEANS」の項目ではShopifyを使用して実際に購入ページへ行けるようにしています
フォームではPHPでデーターベース接続を行っており、送信した内容がMySQLのデータベースに保存され、確認メールが送信されるようになっています。
Shopifyのパスワードは"password"となります。`,

      period: '約1週間',
      lang: 'HTML, CSS, JavaScript, jQuery, PHP, MySQL, Shopify',
      thoughts: `プラグインを使用したWeb制作は初めてしました。プラグインの影響でうまくHTML/CSSを使えないことがあり苦労しました。
ですが、pagePiling.jsの英語ページを確認することで解消される問題も多かったので開発元のガイドをしっかりと読むことの大切さを学びました。`,
      url: 'https://cafe.kitaakinori.com/'
    }
  },
  components: {
    'works-template': WorksTemplate
  }
}
</script>

<style>

</style>