<template>
  <div class="b-color">
    <v-app-bar app color="elevation-0" class="transparent pa-10">
      <v-toolbar-title>KITA AKINORI Portfolio</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
    </v-app-bar>

    <!-- <v-navigation-drawer v-model="drawer" absolute right floating>
      <v-list>
        <v-list-item-group>
          <v-list-item><a href="#">About</a></v-list-item>
          <v-list-item><a href="#">Skills</a></v-list-item>
          <v-list-item><a href="#">WORKS</a></v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer> -->

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
   background-color: transparent!important;
 }
</style>