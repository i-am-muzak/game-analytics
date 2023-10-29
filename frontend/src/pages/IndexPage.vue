<template>
  <q-page>
    <div class="tw-flex tw-items-center">
      <div class="tw-text-[16px] tw-font-bold">Dashboard</div>
      <div class="tw-flex tw-items-center tw-ml-3">
        <div
          class="tw-px-2 tw-py-1 tw-cursor-pointer hover:tw-bg-gray-200 tw-rounded-[3px] tw-text-[12px] tw-flex tw-items-center leading-0"
        >
          <span v-if="dateRange">
            {{ dateRange.from }} - {{ dateRange.to }}
          </span>
          <span v-else style="line-height: none"> Choose Dates </span>
          <span class="tw-flex tw-items-center tw-justify-center tw-ml-[4px]">
            <q-icon size="18px" name="sym_o_calendar_month"></q-icon>
          </span>
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-date v-model="dateRange" range> </q-date>
          </q-popup-proxy>
        </div>

        <div
          class="tw-px-2 tw-py-1 tw-cursor-pointer hover:tw-bg-gray-200 tw-rounded-[3px] tw-text-[12px] tw-flex tw-items-center leading-0 tw-ml-[4px]"
        >
          Filter
          <span class="tw-flex tw-items-center tw-justify-center tw-ml-[4px]">
            <q-icon size="18px" name="sym_o_filter_list"></q-icon>
          </span>
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            nihil, possimus corporis veniam suscipit rerum, iure consequuntur
            harum obcaecati dolorum ex eius perferendis illum? Repudiandae illo
            blanditiis atque fugit saepe.
          </q-popup-proxy>
        </div>

        <div
          class="tw-px-2 tw-py-1 tw-cursor-pointer hover:tw-bg-gray-200 tw-rounded-[3px] tw-text-[12px] tw-flex tw-items-center leading-0 tw-ml-[4px]"
        >
          Android
          <span class="tw-flex tw-items-center tw-justify-center tw-ml-[4px]">
            <q-icon size="18px" name="sym_o_android"></q-icon>
          </span>
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            nihil, possimus corporis veniam suscipit rerum, iure consequuntur
            harum obcaecati dolorum ex eius perferendis illum? Repudiandae illo
            blanditiis atque fugit saepe.
          </q-popup-proxy>
        </div>
      </div>
    </div>
    <div class="tw-mt-3">
      <div
        class="tw-grid xl:tw-grid-cols-6 lg:tw-grid-cols-3 md:tw-grid-cols-2 tw-grid-cols-1 tw-gap-3"
      >
        <div
          class="tw-p-2 tw-bg-white tw-rounded-[3px]"
          v-for="(item, index) in statisticItems"
        >
          <statistic-item
            :key="index"
            :title="item.title"
            :value="item.value"
            :percentage="item.percentage"
            :tooltip="item.tooltip"
            :unit="item.unit"
          ></statistic-item>
        </div>
      </div>
    </div>

    <div class="tw-mt-3">
      <div class="tw-grid lg:tw-grid-cols-3 tw-grid-cols-1 tw-gap-3">
        <div class="tw-bg-white tw-rounded-[3px]">
          <Line />
        </div>
        <div class="tw-bg-white tw-rounded-[3px]">
          <Bar />
        </div>
        <div class="tw-bg-white tw-rounded-[3px]">
          <Line />
        </div>
      </div>
    </div>
    <div class="tw-mt-3">
      <div class="tw-bg-white tw-rounded-[3px]">
        <Line />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import StatisticItem from "../components/common/StatisticItem.vue";
import Line from "../components/charts/Line.vue";
import Bar from "../components/charts/Bar.vue";

import { StatisticItem as StatisticItemType } from "../components/common/StatisticItem";

const statisticItems: Ref<StatisticItemType[]> = ref([
  {
    title: "Clicks",
    value: Math.floor(Math.random() * 100),
    percentage: Math.floor(Math.random() * 100) / 100,
    tooltip:
      "Total number of clicks between the selected date range and platform.",
  },
  {
    title: "Installs",
    value: Math.floor(Math.random() * 10000),
    percentage: Math.floor(Math.random() * 10000) / 100 - 30,
    tooltip:
      "Total number of installs between the selected date range and platform.",
  },
  {
    title: "Costs",
    value: Math.floor(Math.random() * 1000),
    percentage: Math.floor(Math.random() * 10000) / 100 - 30,
    tooltip:
      "Total number of costs between the selected date range on all channels.",
    unit: "$",
  },
  {
    title: "Revenue",
    value: Math.floor(Math.random() * 10000) - 5000,
    percentage: Math.floor(Math.random() * 10000) / 100 - 30,
    tooltip:
      "Total revenue of the selected app between the selected date range...",
    unit: "$",
  },
  {
    title: "Conversion",
    value: Math.floor(Math.random() * 100) / 100,
    percentage: Math.floor(Math.random() * 10000) / 100 - 30,
    tooltip: "Cart",
    unit: "%",
  },
  {
    title: "Sessions",
    value: Math.floor(Math.random() * 10000),
    percentage: Math.floor(Math.random() * 10000) / 100 - 30,
    tooltip: "Curt",
  },
]);

const dateRange = ref({
  from: "2023/10/11",
  to: "2023/10/25",
});
</script>

<style lang="scss" scoped>
:deep(.q-btn__content) {
  font-size: 12px;
}
</style>
