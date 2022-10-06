<template>
  <transition>
    <div>
      <div>
        <v-container class="mb-16">
          <v-row justify="center" align-content="center" class="text-center">
            <v-col cols=12 sm=10 md=8 lg=8>
              <p class="text-h3">ECサイト</p>
              <v-carousel class="mt-16" cycle :height="height" hide-delimiter-background show-arrows-on-hover>
                <v-carousel-item v-for="(img, i) in imgs" :key="i">
                  <v-img :src="img"></v-img>
                </v-carousel-item>
              </v-carousel>
              <ul class="text-left">
                <li class="mt-16">
                  <p class="text-h5">このサイトについて</p>
                  <p class="mt-8">
                    Udemyの教材のチュートリアルで学習した内容をアウトプットして制作したWebアプリケーションです。<br>
                    Laravel8のJetStreamを使って、ユーザーと管理者がそれぞれ登録・ログインできるマルチログインになっています。ユーザー側から商品の購入ができ、管理者側から商品情報のCRUD処理ができます。<br>
                  </p>
                  <p class="mt-8">・ユーザーと管理者のログイン情報は、それぞれ下記となります。</p>
                  <p>
                    メールアドレス: test@test.com<br>
                    パスワード: password
                  </p>
                  <p class="mt-8">・Stripeの決済テスト用クレジットカード情報は、下記となります。</p>
                  <p>
                    カード番号: 4242 4242 4242 4242<br>
                    カード有効期限: 将来の日付<br>
                    セキュリティコード: 任意の3桁の数字<br>
                    その他の情報: 任意の値<br>
                    詳しくは<a href="https://stripe.com/docs/testing?locale=ja-JP"
                      target="_blank">Stripe公式ドキュメント</a>をご確認下さい。
                  </p>
                </li>
                <li class="mt-16">
                  <p class="text-h5">製作期間</p>
                  <p class="mt-8">
                    約2週間
                  </p>
                </li>
                <li class="mt-16">
                  <p class="text-h5">使用言語など</p>
                  <p class="mt-8">
                    Laravel8, JetStream, TailwindCSS, MySQL
                  </p>
                </li>
                <li class="mt-16">
                  <p class="text-h5">作ってみての感想</p>
                  <p class="mt-8">
                    初めてフレームワークを使ったアプリケーション制作をしました。CRUDやルーティングの考え方など初めて触れる内容が沢山ありましたが、面白い内容だったので楽しく制作できました。<br>
                    PHPとは違う点がいくつもあり最初は難しく感じましたが、慣れてくるとLaravelの便利さに気づきました。<br>
                    この制作によって、PHPの理解も深まったように感じました。
                  </p>
                </li>
              </ul>
              <div class="mt-16">
                <v-btn class="mr-lg-6 mb-4 white--text" elevation="2" href="https://laravelec.kitaakinori.com/"
                  target="_blank" color="#737676" x-large>このサイトへ行く</v-btn>
                <v-btn class="mb-4" elevation="2" @click="$router.back()" x-large>戻る</v-btn>
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
        require('@/assets/ec/usertop.png'),
        require('@/assets/ec/usercart.png'),
        require('@/assets/ec/admintop.png'),
        require('@/assets/ec/admincreate.png'),
      ],
    }
  },
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 130
        case 'sm': return 300
        case 'md': return 300
        case 'lg': return 400
        case 'xl': return 500
        default: return 500
      }
    },
  }
}
</script>

<style>
li {
  list-style: none;
}
</style>