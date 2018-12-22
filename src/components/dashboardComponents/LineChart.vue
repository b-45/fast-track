<template>

  <vue-frappe
    id="line-chart"
    type="line"
    :labels="['Sun', 'Mon', 'Tues', 'Weds', 'Thu', 'Fri', 'Sat', 'Sun']"
    :colors="['#1c7ed6']"
    :lineOptions="{regionFill: 1}"
    :dataSets="[
         { values: [18, 40, 30, 35, 8, 52, 17, 14] }
      ]"
  ></vue-frappe>
</template>

<script>
export default {
  name: "LineChart"
};
</script>
<style scoped>
.chart-container {
  position: absolute;
}
</style>
