<template>
  <q-page>
    <div class="tw-flex tw-items-center">
      <div class="tw-text-[16px] tw-font-bold">Media Library</div>
      <div class="tw-flex tw-items-center tw-ml-3">
        <CustomDateSelect @change="handleCustomDateSelection" />
        <CustomDropdown name="Filter" icon="sym_o_filter_list" />
      </div>
    </div>

    <div class="tw-mt-3 tw-bg-white tw-rounded-[3px]">
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

    <div class="tw-text-[16px] tw-font-bold tw-mt-3">All Materials</div>
    <div class="tw-mt-3 tw-bg-white tw-rounded-[3px] tw-p-[16px]">
      <div class="tw-mb-3 tw-flex tw-items-center">
        <div>
          <q-input
            class="tw-w-[240px] modified-icon-input"
            borderless
            v-model="searchText"
            dense
            placeholder="Search by name or id"
          >
            <template v-slot:prepend>
              <q-icon name="sym_o_search" />
            </template>
          </q-input>
        </div>
        <div class="tw-ml-[8px]">
          <q-select
            dense
            class="tw-w-[160px] modified-icon-input"
            borderless
            v-model="selectedChannel"
            :options="['None', 'Facebook', 'Tiktok', 'Unity']"
            label="Dimension"
          />
        </div>
        <CustomDropdown name="Filter" icon="sym_o_filter_list" />
      </div>
      <DataTable />
    </div>
  </q-page>
</template>

<script setup lang="ts">
// Import natives, 3rd party modules first...
import { ref, Ref } from "vue";

// Components
import Line from "../components/charts/Line.vue";
import DataTable from "../components/media-library-view/DataTable.vue";
import CustomDropdown from "../components/common/CustomDropdown.vue";
import CustomDateSelect from "../components/common/CustomDateSelect.vue";
// Interfaces
import { DateRange } from "../components/common/CustomDateSelect";
// Props
// Emits
// Variables
const dateRange: Ref<DateRange | null> = ref(null);
const searchText = ref(null);
const selectedChannel = ref("None");
// Computed Properties
// Methods
function handleCustomDateSelection(value: DateRange): void {
  dateRange.value = value;
}
// Watch
// Vue Hooks (such as mounted, beforeMounted...)
</script>

<style lang="scss" scoped></style>
