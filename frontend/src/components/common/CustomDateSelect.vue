<template>
  <div>
    <div
      class="tw-px-2 tw-py-1 tw-cursor-pointer hover:tw-bg-gray-200 tw-rounded-[3px] tw-text-[12px] tw-flex tw-items-center leading-0 tw-h-[40px]"
    >
      <span v-if="dateRange"> {{ dateRange.from }} - {{ dateRange.to }} </span>
      <span v-else style="line-height: none"> Choose Dates </span>
      <span class="tw-flex tw-items-center tw-justify-center tw-ml-[4px]">
        <q-icon size="18px" name="sym_o_calendar_month"></q-icon>
      </span>
      <q-popup-proxy transition-show="scale" transition-hide="scale">
        <q-date today-btn v-model="dateRange" range></q-date>
      </q-popup-proxy>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Import natives, 3rd party modules
import { ref, Ref, watch, defineEmits } from "vue";
import dayjs from "dayjs";
// Interfaces
import { DateRange } from "./CustomDateSelect";
// Props
// Emits
const emit = defineEmits<{
  change: [value: DateRange];
}>();

// Variables
const dateRange: Ref<DateRange> = ref({
  from: dayjs().subtract(7, "days").format("YYYY/MM/DD"),
  to: dayjs().format("YYYY/MM/DD"),
});

// Computed Properties
// Methods
// Watch
watch(
  dateRange,
  (newValue) => {
    emit("change", newValue);
  },
  { immediate: true }
);
// Vue Hooks (such as mounted, beforeMounted...)
</script>

<style scoped></style>
