<template>
  <v-card>
    <v-footer v-bind="localAttrs" :padless="padless">
      <v-card flat tile width="100%" class="light lighten-1 text-center">
        <v-card-text>
          <v-btn v-for="footeritem in footeritems" :key="footeritem.icon" :href="footeritem.link" target="_blank"
            class="mx-4" icon>
            <v-icon size="24px" :href="footeritem.link">
              {{ footeritem.icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="dark--text">
          <strong>Copyright - all rights reserved.</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    footeritems: [
      {
        icon: 'mdi-github',
        link: 'https://github.com/AkinoriKita'
      }
    ],
    items: [
      'default',
      'absolute',
      'fixed',
    ],
    padless: true,
    variant: 'default',
  }),
  computed: {
    localAttrs() {
      const attrs = {}

      if (this.variant === 'default') {
        attrs.absolute = false
        attrs.fixed = false
      } else {
        attrs[this.variant] = true
      }
      return attrs
    },
  },
}
</script>

<style>

</style>