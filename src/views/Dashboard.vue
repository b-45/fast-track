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
    <DashboardCharts></DashboardCharts>

  </v-container>
</template>

<script>
const SideNav = () => import("@/components/dashboardComponents/SideNav.vue");
const TextReportCards = () =>
  import("@/components/dashboardComponents/TextReportCards.vue");
const DashboardCharts = () =>
  import("@/components/dashboardComponents/DashboardCharts.vue");

export default {
  name: "Dashboard",
  components: {
    SideNav,
    TextReportCards,
    DashboardCharts
  }
};
</script>

<style scoped>
</style>