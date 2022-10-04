<template>
  <transition>
    <div>
      <div>
        <v-container class="mb-16">
          <v-row justify="center" align-content="center" class="text-center">
            <v-col cols=12 sm=10 md=8 lg=6>
              <p class="text-h3">{{ title }}</p>
              <v-carousel class="mt-16" cycle :height="height" hide-delimiter-background show-arrows-on-hover>
                <v-carousel-item v-for="(img, i) in imgs" :key="i">
                  <v-img :src="img"></v-img>
                </v-carousel-item>
              </v-carousel>
              <ul class="text-left">
                <li class="mt-16">このサイトについて
                  <p class="mt-8">
                    {{ about }}
                  </p>
                </li>
                <li class="mt-16">製作期間
                  <p class="mt-8">
                    {{ period }}
                  </p>
                </li>
                <li class="mt-16">使用言語など
                  <p class="mt-8">
                    {{ lang }}
                  </p>
                </li>
                <li class="mt-16">作ってみての感想
                  <p class="mt-8">
                    {{ impression }}
                  </p>
                </li>
              </ul>
              <div class="mt-16">
                <v-btn class="mr-6 mb-4 white--text" elevation="2" :href="url" target="_blank"
                  color="#737676" x-large>このサイトへ行く</v-btn>
                <v-btn class="mr-6 mb-4" elevation="2" to="/app" x-large>戻る</v-btn>
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
    name: 'WorksTemplate',
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