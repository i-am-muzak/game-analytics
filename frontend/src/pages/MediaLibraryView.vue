<template>
  <q-page>
    <div class="tw-flex tw-items-center">
      <div class="tw-text-[16px] tw-font-bold">Media Library</div>
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
      </div>
    </div>

    <div class="tw-mt-3 tw-bg-white tw-rounded-[3px]">
      <Line />
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
          <q-select dense class="tw-w-[160px] modified-icon-input" borderless v-model="selectedChannel" :options="['None', 'Facebook', 'Tiktok', 'Unity']"  label="Dimension" />
        </div>
        <div
          class="tw-px-4 tw-py-1 tw-cursor-pointer hover:tw-bg-gray-200 tw-rounded-[3px] tw-text-[12px] tw-flex tw-items-center leading-0 tw-ml-[8px] tw-h-[40px]"
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
      </div>
      <DataTable />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Line from "components/charts/Line.vue";
import DataTable from "components/media-library-view/DataTable.vue";

const dateRange = ref({
  from: "2023/10/11",
  to: "2023/10/25",
});

const searchText = ref(null);
const selectedChannel = ref("None")
</script>

<style lang="scss" scoped>

</style>
