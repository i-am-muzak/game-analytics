<template>
  <div class="tw-w-full">
    <div class="tw-flex tw-items-center tw-justify-between tw-p-[16px]">
      <span class="tw-font-semibold"> {{ props.title }} </span>
      <span class="digit tw-font-semibold tw-uppercase">
        {{ formattedAverageData ? formattedAverageData : "-" }}
      </span>
    </div>
    <q-separator color="grey-3"></q-separator>
    <div class="tw-p-[16px] tw-pb-0 text-grey-6 tw-text-[12px]">
      <span> {{ props.unitTitle }} </span>
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
// Imports
import { ref, defineProps, computed } from "vue";
// Interfaces
import { Line, Series } from "./Line";
// Props
const props = defineProps<Line>();
// Emits
// Variables
const series = ref(props.series);

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
    categories: props.categories,
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

// Computed Properties
const averageData = computed(() => {
  return calculateOverallAverage(series.value);
});

const formattedAverageData = computed((): string | null => {
  const num = averageData.value;
  if (num) {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(2) + "b";
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + "m";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(2) + "k";
    } else {
      return num.toFixed(2);
    }
  }
  return null;
});
// Methods
function calculateOverallAverage(data: Series[]): number | null {
  if (data.length) {
    const totalLength = data.length;
    // Use reduce to sum up all the values in the "data" arrays of the objects
    const totalSum = data.reduce((acc, item) => {
      // For each object in the array, add the sum of its "data" array to the accumulator
      return (
        acc +
        item.data.reduce((sum, value) => sum + value, 0) / item.data.length
      );
    }, 0);

    // Calculate the overall average by dividing the total sum by the total number of elements
    return totalSum / totalLength;
  }
  return null;
}
// Watch
// Vue Hooks (such as mounted, beforeMounted...)
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
    margin-left: 12px;
  }
}
</style>
