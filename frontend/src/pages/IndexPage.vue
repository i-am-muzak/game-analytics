<template>
  <q-page>
    <div class="tw-flex tw-items-center">
      <div class="tw-text-[16px] tw-font-bold">Dashboard</div>
      <div class="tw-flex tw-items-center tw-ml-3">
        <CustomDateSelect @change="handleCustomDateSelection" />

        <CustomDropdown name="Filter" icon="sym_o_filter_list" />
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
          <Line
            title="Test"
            unit-title="Test"
            :categories="['a', 'b', 'c', 'd', 'e', 'f', 'g']"
            :series="[
              {
                name: 'test',
                data: Array.from({ length: 7 }, () =>
                  Math.floor(Math.random() * 20000)
                ),
              },
              {
                name: 'test2',
                data: Array.from({ length: 7 }, () =>
                  Math.floor(Math.random() * 20000)
                ),
              },
            ]"
          />
        </div>
        <div class="tw-bg-white tw-rounded-[3px]">
          <Bar />
        </div>
        <div class="tw-bg-white tw-rounded-[3px]">
          <Line
            title="Test"
            unit-title="Test"
            :categories="['a', 'b', 'c', 'd', 'e', 'f', 'g']"
            :series="[
              {
                name: 'test',
                data: Array.from({ length: 7 }, () =>
                  Math.floor(Math.random() * 501)
                ),
              },
            ]"
          />
        </div>
      </div>
    </div>
    <div class="tw-mt-3">
      <div class="tw-bg-white tw-rounded-[3px]">
        <Line
          title="Test"
          unit-title="Test"
          :categories="['a', 'b', 'c', 'd', 'e', 'f', 'g']"
          :series="[
            {
              name: 'test',
              data: Array.from({ length: 7 }, () =>
                Math.floor(Math.random() * 501)
              ),
            },
          ]"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
// Imports natives, stores etc...
import { onMounted, ref, Ref } from "vue";
import { useUserStore } from "src/stores/user";
// Components
import StatisticItem from "../components/common/StatisticItem.vue";
import Line from "../components/charts/Line.vue";
import Bar from "../components/charts/Bar.vue";
import CustomDateSelect from "../components/common/CustomDateSelect.vue";
import CustomDropdown from "../components/common/CustomDropdown.vue";

// Interfaces
import { StatisticItem as StatisticItemType } from "../components/common/StatisticItem";
import { DateRange } from "../components/common/CustomDateSelect";
import { api } from "src/boot/axios";
import { Cookies } from "quasar";

// Props
// Emits
// Variables
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
const dateRange: Ref<DateRange | null> = ref(null);
const userStore = useUserStore();
// Computed Properties
// Methods
function handleCustomDateSelection(value: DateRange): void {
  dateRange.value = value;
}

async function getUserProfile() {
  try {
    console.log(Cookies.get("session"));

    const response = await api.get(`user/profile`);
    if (response.status === 200) {
      userStore.setUserProfile(response.data);
      console.log(response.data);
    }
  } catch (error) {
    console.log(error);
  }
}
// Watch
// Vue Hooks (such as mounted, beforeMounted...)
onMounted(async () => {
  await getUserProfile();
});
</script>

<style lang="scss" scoped>
:deep(.q-btn__content) {
  font-size: 12px;
}
</style>
