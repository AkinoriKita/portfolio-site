<template>
  <transition>
    <div>
      <div>
        <v-container class="mb-16">
          <v-row justify="center" align-content="center" class="text-center">
            <v-col cols=12 sm=10 md=8 lg=6>
              <p class="text-h3">ポートフォリオサイト</p>
              <v-carousel class="mt-16" cycle :height="height" hide-delimiter-background show-arrows-on-hover>
                <v-carousel-item v-for="(img, i) in imgs" :key="i">
                  <v-img :src="img"></v-img>
                </v-carousel-item>
              </v-carousel>
              <ul class="text-left">
                <li class="mt-16">このサイトについて
                  <p class="mt-8">
                    このWebページです。Vue2とVueRouter、Vuetifyを使用し、シングルページアプリケーションとなるように制作しました。<br>
                    「WORKS」の部分でVueRouterを使用し、アニメーションの付いたページ遷移をさせています。
                  </p>
                </li>
                <li class="mt-16">製作期間
                  <p class="mt-8">
                    約3日
                  </p>
                </li>
                <li class="mt-16">使用言語など
                  <p class="mt-8">
                    Vue2, VueRouter, Vuetify
                  </p>
                </li>
                <li class="mt-16">作ってみての感想
                  <p class="mt-8">
                    以前にLaravelを使ったWebアプリ制作をしていたので、Laravelと似ている部分があり思ったよりもスムーズにVueの仕組みを理解できました。<br>
                    VueRouterでのページ遷移に、うまくいっていないところがあるので手直ししていきたいと思います。<br>
                    Vuetifyを使うことで短期間でWebサイトを制作できました。
                  </p>
                </li>
              </ul>
              <div class="mt-16">
                <v-btn class="mr-6 mb-4 white--text" elevation="2" href="https://kitaakinori.com/" target="_blank"
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
        require('@/assets/portfolio/top.png'),
        require('@/assets/portfolio/works.png'),
        require('@/assets/portfolio/cafe.png'),
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