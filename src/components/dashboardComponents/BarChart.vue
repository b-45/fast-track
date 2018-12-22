<template>
  <vue-frappe
    id="Bar-chart"
    type="bar"
    :labels="['2014','2015', '2016', '2017', '2018']"
    :colors="['#3abf94']"
    :lineOptions="{regionFill: 1}"
    :dataSets="[
         { values: [455, 540, 600, 705, 800] }
      ]"
  ></vue-frappe>
</template>

<script>
export default {
  name: "BarChart"
};
</script>

