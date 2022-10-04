<template>
  <transition>
    <div>
      <div>
        <v-container class="mb-16">
          <v-row justify="center" align-content="center" class="text-center">
            <v-col cols=12 sm=10 md=8 lg=6>
              <p class="text-h3">ECサイト</p>
              <v-carousel class="mt-16" cycle height="300" hide-delimiter-background show-arrows-on-hover>
                <v-carousel-item v-for="(img, i) in imgs" :key="i">
                  <v-img :src="img"></v-img>
                </v-carousel-item>
              </v-carousel>
              <ul class="text-left">
                <li class="mt-16">このサイトについて
                  <p class="mt-8">
                    Udemyの教材のチュートリアルで学習した内容をアウトプットして制作したWebアプリケーションです。<br>
                    Laravel8のJetStreamを使って、ユーザーと管理者がそれぞれ登録・ログインできるマルチログインになっています。ユーザー側から商品の購入ができ、管理者側から商品情報のCRUD処理ができます。<br>
                  </p>
                  <p>
                    ユーザーと管理者のログイン情報は、どちらも下記となります。<br>
                    メールアドレス: test@test.com<br>
                    パスワード: password
                  </p>
                </li>
                <li class="mt-16">製作期間
                  <p class="mt-8">
                    約2週間
                  </p>
                </li>
                <li class="mt-16">使用言語など
                  <p class="mt-8">
                    Laravel8, JetStream, TailwindCSS, MySQL
                  </p>
                </li>
                <li class="mt-16">作ってみての感想
                  <p class="mt-8">
                    初めてフレームワークを使ったアプリケーション制作をしました。CRUDやルーティングの考え方など初めて触れる内容が沢山ありましたが、面白い内容だったので楽しく制作できました。<br>
                    PHPとは違う点がいくつもあり最初は難しく感じましたが、慣れてくるとLaravelの便利さに気づきました。<br>
                    この制作によって、PHPの理解も深まったように感じました。
                  </p>
                </li>
              </ul>
              <div class="mt-16">
                <v-btn class="mr-6 white--text" elevation="2" href="https://laravelec.kitaakinori.com/" target="_blank"
                  color="#737676" x-large>このサイトへ行く</v-btn>
                <v-btn class="mr-6" elevation="2" to="/app" x-large>戻る</v-btn>
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
}
</script>

<style>

</style>