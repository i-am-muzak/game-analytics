<template>
  <div>
    <div>
      <div
        class="tw-mt-[5px] text-grey-6 tw-font-medium tw-text-[12px] tw-tracking-[-0.25px] tw-flex tw-items-center"
      >
        <span>
          {{ props.title }}
        </span>
        <span
          class="tw-flex tw-items-center tw-justify-center tw-ml-[4px]"
          v-if="props.tooltip"
        >
          <q-icon size="18px" name="sym_o_help"></q-icon>
          <q-tooltip> {{ props.tooltip }} </q-tooltip>
        </span>
      </div>
      <div class="tw-flex tw-items-center">
        <div>
          <div class="digit tw-my-[3px]">
            <span class="tw-font-semibold tw-text-[18px] text-grey-9">
              {{ props.value }}{{ props.unit }}
            </span>
          </div>
          <div class="tw-inline-block">
            <div
              class="tw-text-[10px] tw-rounded-[3px] tw-px-[3px] tw-flex tw-items-center"
              :class="{
                'text-green-8 bg-green-1': props.percentage > 0,
                'text-red-8 bg-red-1': props.percentage < 0,
              }"
            >
              <span class="tw-mr-[3px]">
                <q-icon
                  v-if="props.percentage > 0"
                  name="sym_o_trending_up"
                  size="18px"
                ></q-icon>
                <q-icon
                  v-else-if="props.percentage < 0"
                  name="sym_o_trending_down"
                  size="18px"
                ></q-icon>
              </span>
              <span> {{ props.percentage.toFixed(2) }}% </span>
            </div>
          </div>
        </div>
        <div class="tw-w-full">
          <Sparkline />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { StatisticItem } from "./StatisticItem";
import Sparkline from "components/charts/Sparkline.vue";

const props = defineProps<StatisticItem>();
</script>

<style scoped></style>
