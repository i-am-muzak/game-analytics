<template>
  <div class="tw-w-full">
    <div class="tw-flex tw-items-center tw-justify-between tw-p-[16px]">
      <span class="tw-font-semibold"> Daily Active Users </span>
      <span class="digit tw-font-semibold tw-uppercase"> 342.34k </span>
    </div>
    <q-separator color="grey-3"></q-separator>
    <div class="tw-p-[16px] tw-pb-0 text-grey-6 tw-text-[12px]">
      <span> Users </span>
    </div>
    <apexchart
      type="line"
      height="280"
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
    data: Array.from({ length: 8 }, () => Math.floor(Math.random() * 501)),
  },
]);

const options = ref({
  chart: {
    type: "line",
    height: 280,
    zoom: {
      enabled: false,
    },
    animations: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    fontFamily: "Inter",
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 6,
    strokeWidth: 0,
    hover: {
      sizeOffset: 1.5,
    },
  },
  tooltip: {
    enabled: true,
  },
  stroke: {
    curve: "straight",
    width: 2,
  },
  xaxis: {
    // labels: {}
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept"],
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    labels: {
      style: {
        fontSize: "11px",
        colors: "#73829b",
      },
    },
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    labels: {
      style: {
        fontSize: "11px",
        colors: "#76849d",
      },
    },
  },
  grid: {
    borderColor: "#eff0ef",
  },
});
</script>

<style scoped lang="scss">
:deep(.apexcharts-tooltip) {
  background: #f8f8f8e5 !important;
  color: rgb(52, 51, 50);

  .apexcharts-tooltip-title {
    background: transparent !important;
    border-bottom: none !important;
    font-weight: 600;
  }

  .apexcharts-tooltip-marker {
    width: 8px;
    height: 8px;
  }

  .apexcharts-tooltip-text-y-value {
    margin-left: 12px
  }
}
</style>
