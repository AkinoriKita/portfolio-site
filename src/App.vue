<template>
  <v-app>
    <v-main class="pa-0">
      <router-view class="pa-16" />
      <router-view name="about" class="pa-16" />
      <router-view name="skills" class="pa-16" />
      <router-view name="products" class="pa-16" />
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
