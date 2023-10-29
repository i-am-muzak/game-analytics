<template>
  <div class="">
    <q-table
      :rows="rows"
      :columns="columns"
      row-key="name"
      flat
      :separator="'none'"
      :rows-per-page-options="[15, 30, 50, 100]"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            <span class="tw-text-[12px] text-grey-9 tw-font-medium">
              {{ props.row.name }}
            </span>
          </q-td>
          <q-td key="id" :props="props">
            <span class="tw-text-[12px] text-grey-8">
              {{ props.row.id }}
            </span>
          </q-td>
          <q-td key="type" :props="props">
            <span
              class="tw-inline-block tw-px-[8px] tw-py-[1px] tw-rounded-[3px] tw-text-center tw-font-medium tw-capitalize tw-text-[11px]"
              :class="{
                'bg-green-1 text-green-9': props.row.type === 'image',
                'bg-deep-purple-1 text-deep-purple-9':
                  props.row.type === 'playable',
                'bg-cyan-1 text-cyan-9': props.row.type === 'video',
              }"
            >
              {{ props.row.type }}
            </span>
          </q-td>
          <q-td key="cost" :props="props">
            <span class="tw-text-[12px] text-grey-8 digit tw-font-semibold">
              {{ props.row.cost }} $
            </span>
          </q-td>
          <q-td key="channels" :props="props">
            <span
              v-for="(item, index) in props.row.channels"
              :key="index"
              class="tw-inline-block tw-px-[8px] tw-py-[1px] tw-rounded-[3px] tw-text-center tw-capitalize tw-font-medium tw-text-[11px] tw-mr-[5px]"
              :class="{
                'bg-green-1 text-green-9': item === 'tiktok',
                'bg-deep-purple-1 text-deep-purple-9': item === 'facebook',
                'bg-cyan-1 text-cyan-9': item === 'unity',
              }"
            >
              {{ item }}
            </span>
          </q-td>
          <q-td key="created_at" :props="props">
            <span class="tw-text-[12px] text-grey-8">
              {{ timestampToDate(props.row.created_at) }}
            </span>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script setup lang="ts">
import * as dayjs from "dayjs";

const columns = [
  {
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    sortable: true,
  },
  {
    name: "id",
    label: "Material ID",
    align: "left",
    field: "id",
    sortable: true,
  },
  {
    name: "type",
    label: "Type",
    align: "left",
    field: "type",
    sortable: true,
  },
  {
    name: "cost",
    label: "Total Cost",
    field: "cost",
    align: "left",
    sortable: true,
  },
  {
    name: "channels",
    label: "Used In",
    field: "channels",
    align: "left",
    sortable: false,
  },
  {
    name: "created_at",
    label: "Created At",
    field: "created_at",
    align: "left",
    sortable: false,
  },
];

const rows = [
  {
    name: "Frozen Yogurt",
    id: new Date().getTime().toString(18),
    type: "image",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
  },
  {
    name: "Frozen Yogurt 2",
    id: new Date().getTime().toString(18),
    type: "playable",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
  },
  {
    name: "Frozen Yogurt 3",
    id: new Date().getTime().toString(18),
    type: "video",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
  },
  {
    name: "Frozen Yogurt",
    id: new Date().getTime().toString(18),
    type: "image",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
  },
  {
    name: "Frozen Yogurt 2",
    id: new Date().getTime().toString(18),
    type: "playable",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
  },
  {
    name: "Frozen Yogurt 3",
    id: new Date().getTime().toString(18),
    type: "video",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
  },
  {
    name: "Frozen Yogurt",
    id: new Date().getTime().toString(18),
    type: "image",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
  },
  {
    name: "Frozen Yogurt 2",
    id: new Date().getTime().toString(18),
    type: "playable",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
  },
  {
    name: "Frozen Yogurt 3",
    id: new Date().getTime().toString(18),
    type: "video",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
  },
  {
    name: "Frozen Yogurt",
    id: new Date().getTime().toString(18),
    type: "image",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
  },
  {
    name: "Frozen Yogurt 2",
    id: new Date().getTime().toString(18),
    type: "playable",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
  },
  {
    name: "Frozen Yogurt 3",
    id: new Date().getTime().toString(18),
    type: "video",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
  },
  {
    name: "Frozen Yogurt",
    id: new Date().getTime().toString(18),
    type: "image",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
  },
  {
    name: "Frozen Yogurt 2",
    id: new Date().getTime().toString(18),
    type: "playable",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
  },
  {
    name: "Frozen Yogurt 3",
    id: new Date().getTime().toString(18),
    type: "video",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
  },
  {
    name: "Frozen Yogurt",
    id: new Date().getTime().toString(18),
    type: "image",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
  },
  {
    name: "Frozen Yogurt 2",
    id: new Date().getTime().toString(18),
    type: "playable",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
  },
  {
    name: "Frozen Yogurt 3",
    id: new Date().getTime().toString(18),
    type: "video",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
  },
];

function timestampToDate(unix: number): string {
  return dayjs.unix(unix).format("DD.MM.YYYY HH:mm");
}
</script>

<style scoped lang="scss">
:deep(.q-table__sort-icon) {
  font-weight: 400;
  font-size: 18px;
  line-height: 4px;
  width: unset;
  height: unset;
}

:deep(thead) {
  tr {
    th {
      background: rgba(0, 0, 0, 0.05);
      font-weight: 600;
      font-size: 12px;
      &:hover {
        background: rgba(0, 0, 0, 0.075);
      }
    }
  }
}
</style>
