<template>
  <div>
    <div
      class="tw-px-2 tw-py-1 tw-cursor-pointer hover:tw-bg-gray-200 tw-rounded-[3px] tw-text-[12px] tw-flex tw-items-center leading-0 tw-ml-[4px] tw-h-[40px] tw-min-w-[85px] tw-justify-between"
    >
      {{ props.name }}
      <span class="tw-flex tw-items-center tw-justify-center tw-ml-[4px]">
        <q-icon size="18px" :name="props.icon"></q-icon>
      </span>
      <q-popup-proxy
        v-model:model-value="showDropdown"
        transition-show="scale"
        transition-hide="scale"
      >
        <div class="tw-p-[12px] tw-flex">
          <div>
            <div
              v-for="(dropdownItem, index) in dropdownItems.map((x) => x.group)"
              :key="index"
              class="tw-p-[8px] hover:tw-bg-blue-50 hover:tw-text-blue-600 tw-rounded-[3px] tw-w-[140px] tw-cursor-pointer tw-text-[12px] tw-capitalize tw-mb-[2px]"
              :class="{
                'tw-bg-blue-50 tw-text-blue-600':
                  dropdownItem === selectedDropdown,
              }"
              @click="selectedDropdown = dropdownItem"
            >
              {{ dropdownItem }}
            </div>
          </div>
          <div>
            <div
              v-for="(dropdownItem, index) in dropdownItems.filter(
                (x) => x.group === selectedDropdown
              )"
              :key="index"
              class="tw-text-[12px] tw-w-[170px] tw-pl-[4px]"
            >
              <div class="tw-max-h-[216px] tw-overflow-y-scroll">
                <div
                  v-for="(country, index) in dropdownItem.data.availableValues"
                  class="tw-p-2 tw-pr-0 hover:tw-bg-gray-100 tw-rounded-[3px]"
                >
                  <q-checkbox
                    v-model="dropdownItem.data.value"
                    :val="country.code"
                    :label="country.name"
                    :key="index"
                    dense
                    class="tw-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-popup-proxy>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Import natives, 3rd party modules first...
import { defineProps, ref, Ref } from "vue";
// Interfaces
import { CustomDropdownProps } from "./CustomDropdown";
// Props
const props = defineProps<CustomDropdownProps>();
// Emits
// Variables
const showDropdown: Ref<boolean> = ref(false);
const dropdownItems = ref([
  {
    group: "countries",
    data: {
      value: [],
      availableValues: [
        {
          code: "tr",
          name: "Turkey",
        },
        {
          code: "gb",
          name: "Great Britain",
        },
        {
          code: "usa",
          name: "United States",
        },
        {
          code: "ru",
          name: "Russia",
        },
        {
          code: "de",
          name: "Germany",
        },
      ],
    },
  },
  {
    group: "reports",
    data: {
      value: [
        "clicks",
        "installs",
        "costs",
        "revenue",
        "conversion",
        "sessions",
      ],
      availableValues: [
        {
          code: "clicks",
          name: "Clicks",
        },
        {
          code: "installs",
          name: "Installs",
        },
        {
          code: "costs",
          name: "Costs",
        },
        {
          code: "revenue",
          name: "Revenue",
        },
        {
          code: "conversion",
          name: "Conversion",
        },
        {
          code: "sessions",
          name: "Sessions",
        },
        {
          code: "crash-repots",
          name: "Crash Reports",
        },
        {
          code: "new-users",
          name: "New Users",
        },
        {
          code: "iap",
          name: "In App Purchases",
        },
      ],
    },
  },
  {
    group: "platform",
    data: {
      value: ["ios", "android"],
      availableValues: [
        {
          code: "ios",
          name: "iOS",
        },
        {
          code: "android",
          name: "Android",
        },
      ],
    },
  },
]);
const selectedDropdown = ref("countries");

// Computed Properties
// Methods
// Watch
// Vue Hooks (such as mounted, beforeMounted...)
</script>

<style scoped></style>
