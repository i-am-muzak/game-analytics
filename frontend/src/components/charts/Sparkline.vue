<template>
  <div class="tw-px-[6px] tw-pr-0 tw-w-full">
    <apexchart
      type="line"
      height="50"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const series = ref([
  {
    name: "STOCK ABC",
    data: Array.from({length: 14}, () => Math.floor(Math.random() * 501)),
  },
]);

const options = ref({
  chart: {
    type: "line",
    height: 50,
    zoom: {
      enabled: false,
    },
    sparkline: {
      enabled: true,
    },
    animations: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
//   markers: {
//     size: [4, 7],
//   },
  tooltip: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 1,
  },
});
</script>

<style scoped></style>
