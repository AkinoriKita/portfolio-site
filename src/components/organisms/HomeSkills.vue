<template>
  <div class="b-color">
    <v-container>
      <p class="text-h3 text-center">Skills</p>
      <skill-card :skills="skills"></skill-card>
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
          description: '以前ブログ運営を通して得た知識を通してSEO対策を考慮したマークアップを する事ができます。',
        },
        {
          id: 2,
          title: 'CSS3',
          icon: ['mdi-language-css3'],
          description: '以前ブログ運営を通して得た知識を通してSEO対策を考慮したマークアップを する事ができます。',
        },
        {
          id: 3,
          title: 'JavaScript・jQuery・Vue',
          icon: [
            'mdi-language-javascript',
            'mdi-jquery',
            'mdi-vuejs'
          ],
          description: '以前ブログ運営を通して得た知識を通してSEO対策を考慮したマークアップを する事ができます。',
        },
        {
          id: 4,
          title: 'PHP・Laravel',
          icon: [
            'mdi-language-php',
            'mdi-laravel'
          ],
          description: '以前ブログ運営を通して得た知識を通してSEO対策を考慮したマークアップを する事ができます。',
        },
        {
          id: 5,
          title: 'WordPress',
          icon: ['mdi-wordpress'],
          description: '以前ブログ運営を通して得た知識を通してSEO対策を考慮したマークアップを する事ができます。',
        },
        {
          id: 6,
          title: 'SEO',
          icon: ['mdi-magnify'],
          description: '以前ブログ運営を通して得た知識を通してSEO対策を考慮したマークアップを する事ができます。',
        },
      ]
    }
  },
  components: {
    'skill-card': SkillCard
  }
}
</script>

<style scoped lang="scss">
.b-color {
  background-color: #e7e7ec;
}
</style>