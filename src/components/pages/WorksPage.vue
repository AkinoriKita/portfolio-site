<template>
  <transition>
    <div>
      <div>
        <v-container class="mb-16">
          <v-row justify="center" align-content="center" class="text-center">
            <v-col cols=12 sm=10 md=8 lg=8>
              <p class="text-h3">Cafe</p>
              <v-carousel class="mt-16" cycle :height="height" hide-delimiter-background show-arrows-on-hover>
                <v-carousel-item v-for="(img, i) in imgs" :key="i">
                  <v-img :src="img"></v-img>
                </v-carousel-item>
              </v-carousel>
              <ul class="text-left">
                <li class="mt-16">
                  <p class="text-h5">このサイトについて</p>
                  <p class="mt-8" style="white-space:pre-wrap; word-wrap:break-word;">
                    {{ about }}
                  </p>
                </li>
                <li class="mt-16">
                  <p class="text-h5">製作期間</p>
                  <p class="mt-8">
                    {{ period }}
                  </p>
                </li>
                <li class="mt-16">
                  <p class="text-h5">使用言語など</p>
                  <p class="mt-8">
                    {{ lang }}
                  </p>
                </li>
                <li class="mt-16">
                  <p class="text-h5">作ってみての感想</p>
                  <p class="mt-8" style="white-space:pre-wrap; word-wrap:break-word;">
                    {{ thoughts }}
                  </p>
                </li>
              </ul>
              <div class="mt-16">
                <v-btn class="mr-lg-6 mb-4 white--text" elevation="2" :href="url"
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
    }
  },
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 130
        case 'sm': return 300
        case 'md': return 300
        case 'lg': return 400
        case 'xl': return 600
        default: return 600
      }
    },
  },
  props: {
    imgs: {
      type: Array
    },
    about: {
      type: String
    },
    period: {
      type: String
    },
    lang: {
      type: String
    },
    thoughts: {
      type: String
    },
    url: {
      type: String
    },
  }
}
</script>

<style>

</style>