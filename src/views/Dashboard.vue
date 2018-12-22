<template>
  <!-- dashboard -->
  <v-container
    grid-list-sm
    class="my-5"
  >
    <!-- navigations drawer -->
    <SideNav></SideNav>
    <!-- text report card -->
    <TextReportCards></TextReportCards>

  </v-container>
</template>

<script>
const SideNav = () => import("@/components/dashboardComponents/SideNav.vue");
const TextReportCards = () =>
  import("@/components/dashboardComponents/TextReportCards.vue");

export default {
  name: "Dashboard",
  components: {
    SideNav,
    TextReportCards
  }
};
</script>

<style scoped>
</style>