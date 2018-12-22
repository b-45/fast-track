<template>
  <!-- dashboard -->
  <v-container
    grid-list-sm
    class="my-5"
  >
    <!-- navigations drawer -->
    <SideNav></SideNav>
  </v-container>
</template>

<script>
const SideNav = () => import("@/components/dashboardComponents/SideNav.vue");
export default {
  name: "Dashboard",
  components: {
    SideNav
  }
};
</script>

<style scoped>
</style>