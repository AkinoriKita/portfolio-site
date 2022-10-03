<template>
  <v-app class="b-color">
    <v-main class="pa-0">
      <router-view class="pa-16" />
      <router-view name="about" class="pa-16" />
      <router-view name="skills" class="pa-16" />
      <transition name="fade" mode="out-in">
        <router-view name="products" class="pa-16" />
      </transition>
      <router-view name="footer" />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
.fade{
  &-enter{
    transform: translate(-100px, 0);
    opacity: 0;
    &-to{
      opacity: 1;
    }
    &-active{
      transition: all 1s 0s ease;
    }
  }
  &-leave{
    transform: translate(0, 0);
    opacity: 1;
    &-to{
      transform: translate(100px, 0);
      opacity: 0;
    }
    &-active{
      transition: all .5s 0s ease;
    }
  }
}

.b-color {
  background-color: #e7ecec;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>