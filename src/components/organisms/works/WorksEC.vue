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
        require('@/assets/ec/usertop.png'),
        require('@/assets/ec/usercart.png'),
        require('@/assets/ec/admintop.png'),
        require('@/assets/ec/admincreate.png'),
      ],
   about: `Udemyの教材のチュートリアルで学習した内容をアウトプットして制作したWebアプリケーションです。
Laravel8のJetStreamを使って、ユーザーと管理者がそれぞれ登録・ログインできるマルチログインになっています。ユーザー側から商品の購入ができ、管理者側から商品情報のCRUD処理ができます。

・ユーザーと管理者のログイン情報は、それぞれ下記となります。

メールアドレス: test@test.com<br>
パスワード: password

・Stripeの決済テスト用クレジットカード情報は、下記となります。

カード番号: 4242 4242 4242 4242
カード有効期限: 将来の日付
セキュリティコード: 任意の3桁の数字
その他の情報: 任意の値`,

      period: '約2週間',
      lang: 'Laravel8, JetStream, TailwindCSS, MySQL',
      thoughts: `初めてフレームワークを使ったアプリケーション制作をしました。CRUDやルーティングの考え方など初めて触れる内容が沢山ありましたが、面白い内容だったので楽しく制作できました。
PHPとは違う点がいくつもあり最初は難しく感じましたが、慣れてくるとLaravelの便利さに気づきました。
この制作によって、PHPの理解も深まったように感じました。`,
      url: 'https://laravelec.kitaakinori.com/'
    }
  },
  components: {
    'works-template': WorksTemplate
  }
}
</script>

<style>
li {
  list-style: none;
}
</style>