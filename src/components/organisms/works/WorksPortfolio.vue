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
        require('@/assets/portfolio/top.png'),
        require('@/assets/portfolio/works.png'),
        require('@/assets/portfolio/cafe.png'),
      ],
    about: `このWebページです。Vue2とVueRouter、Vuetifyを使用し、シングルページアプリケーションとなるように制作しました。
「WORKS」の部分でVueRouterを使用し、アニメーションの付いたページ遷移をさせています。`,

      period: '約4日間',
      lang: 'Vue2, VueRouter, Vuetify',
      thoughts: `以前にLaravelを使ったWebアプリ制作をしていたので、Laravelと似ている部分があり思ったよりもスムーズにVueの仕組みを理解できました。
VueRouterでのページ遷移に、うまくいっていないところがあるので直していきたいと思います。
Vuetifyを使うことで短期間でWebサイトを制作できました。`,
      url: 'https://kitaakinori.com/'
    }
  },
  components: {
    'works-template': WorksTemplate
  }
}
</script>

<style>

</style>