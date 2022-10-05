<template>
  <div class="b-color">
    <v-app-bar app dense color="elevation-0" class="transparent pa-10">
      <v-toolbar-title>KITA AKINORI Portfolio</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-navigation-drawer v-model="drawer" fixed floating hide-overlay right color="elevation-0"
        class="transparent mt-16 ml-16" height="max" width="120">
        <v-list class="mt-8">
          <v-list-item-group>
            <v-list-item @click="drawer = !drawer" v-scroll-to="'#about'">ABOUT</v-list-item>
            <v-list-item @click="drawer = !drawer" v-scroll-to="'#skills'">SKILLS</v-list-item>
            <v-list-item @click="drawer = !drawer" v-scroll-to="'#works'">WORKS</v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-app-bar>

    <v-container>
      <v-row justify="center" align-content="center" class="text-center mt-16 mb-16">
        <v-col cols=12 sm=10 md=8 lg=6>
          <p class="text-h2">KITA AKINORI Portfolio</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
}
</script>

<style scoped>
.b-color {
  background-color: #ece7ec;
}

.transparent {
  background-color: transparent !important;
}
</style>