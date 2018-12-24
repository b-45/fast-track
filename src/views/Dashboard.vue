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
    <ReportCharts></ReportCharts>

  </v-container>
</template>

<script>
const SideNav = () => import("@/components/dashboardComponents/SideNav.vue");
const TextReportCards = () =>
  import("@/components/dashboardComponents/TextReportCards.vue");
const DashboardCharts = () =>
  import("@/components/dashboardComponents/DashboardCharts.vue");
const ReportCharts = () =>
  import("@/components/dashboardComponents/ReportCharts.vue");

export default {
  name: "Dashboard",
  components: {
    SideNav,
    TextReportCards,
    DashboardCharts,
    ReportCharts
  }
};
</script>

<style scoped>
</style>