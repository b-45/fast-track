<template>
  <v-app class="app grey lighten-4">
    <Toolbar></Toolbar>
    <!-- main content -->
    <v-content class="mx-4 mb-4">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
const Toolbar = () => import("@/components/sharedComponents/Toolbar.vue");

export default {
  name: "App",
  components: {
    Toolbar
  },
  data() {
    return {};
  }
};
</script>
<style>
.app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
