<template>
  <v-layout
    row
    wrap
    mt-3
    mb-3
  >
    <v-flex
      xs12
      lg6
    >
      <v-card flat>
        <v-card-title
          class="body-2 center"
          primary-title
        >
          Orders
        </v-card-title>
        <LineChart></LineChart>

      </v-card>
    </v-flex>

    <v-flex
      xs12
      lg6
    >
      <v-card flat>
        <v-card-title
          class="body-2 center"
          primary-title
        >
          Sales
        </v-card-title>
        <!-- <h1 class="text-md-center">Sales</h1> -->
        <BarChart></BarChart>
      </v-card>
    </v-flex>

  </v-layout>
</template>

<script>
const LineChart = () =>
  import("@/components/dashboardComponents/LineChart.vue");
const BarChart = () => import("@/components/dashboardComponents/BarChart.vue");
export default {
  name: "ReportCharts",
  components: { LineChart, BarChart }
};
</script>

<style scoped>
</style>