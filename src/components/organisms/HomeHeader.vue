<template>
  <div class="b-color">
    <!-- <v-app-bar app color="elevation-0 white">
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute right floating>
      <v-list>
        <v-list-item-group>
          <v-list-item><a href="#">Menu Item1</a></v-list-item>
          <v-list-item><a href="#">Menu Item2</a></v-list-item>
          <v-list-item><a href="#">Menu Item3</a></v-list-item>
          <v-list-item><a href="#">Menu Item4</a></v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer> -->

    <v-container>
      <v-row justify="center" align-content="center" class="text-center">
        <v-col cols=12 sm=10 md=8 lg=6>
          <p class="text-h2">KITA AKINORI`s Portfolio</p>
          <p>
            Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce
            convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed,
            nonummy id, metus.

            Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis
            vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
          </p>
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

<style scoped lang="scss">
.b-color {
  background-color: #ece7ec;
}
</style>