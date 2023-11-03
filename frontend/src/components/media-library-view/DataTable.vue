<template>
  <div class="">
    <q-table
      :rows="rows"
      :columns="columns"
      row-key="name"
      flat
      :separator="'none'"
      :rows-per-page-options="[15, 30, 50, 100]"
      :grid="$q.screen.md || $q.screen.sm || $q.screen.xs"
      :hide-header="$q.screen.md || $q.screen.sm || $q.screen.xs"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            <div class="tw-flex tw-items-center">
              <div
                class="image-section tw-cursor-pointer"
                @click="showPreview(props.row)"
              >
                <img
                  :src="props.row.logo"
                  width="48"
                  class="tw-rounded-[3px]"
                  loading="lazy"
                />
                <span class="play-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-player-play-filled"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    stroke-width="1.75"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
                      stroke-width="0"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </div>
              <span
                class="tw-text-[12px] text-grey-9 tw-font-medium tw-ml-[5px]"
              >
                {{ props.row.name }}
              </span>
            </div>
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

    <video-player
      :video="videoData"
      :show="show"
      @hide="handleOnDialogClosed"
    />
  </div>
</template>

<script setup lang="ts">
// Import natives, 3rd party modules first...
import * as dayjs from "dayjs";
import { ref, Ref } from "vue";
// Components
import VideoPlayer from "../common/VideoPlayer.vue";

// Interfaces
import { Video } from "../common/VideoPlayer";

// Props
// Emits
// Variables
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
    logo: "https://play-lh.googleusercontent.com/qBdVfwRCsI4KM7qewhJ0AKZKQjyD-DdxPDcdDbsRMhNO9zrwbefggn1vGqRIDZA3fg=s96-rw",
    video: {
      poster: null,
      source:
        "https://storage.googleapis.com/game_booster/demo/royal-match-01.mp4",
    },
  },
  {
    name: "Frozen Yogurt 2",
    id: new Date().getTime().toString(18),
    type: "playable",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
    logo: "https://play-lh.googleusercontent.com/qBdVfwRCsI4KM7qewhJ0AKZKQjyD-DdxPDcdDbsRMhNO9zrwbefggn1vGqRIDZA3fg=s96-rw",
    video: {
      poster: null,
      source:
        "https://storage.googleapis.com/game_booster/demo/royal-match-01.mp4",
    },
  },
  {
    name: "Frozen Yogurt 3",
    id: new Date().getTime().toString(18),
    type: "video",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
    logo: "https://play-lh.googleusercontent.com/qBdVfwRCsI4KM7qewhJ0AKZKQjyD-DdxPDcdDbsRMhNO9zrwbefggn1vGqRIDZA3fg=s96-rw",
    video: {
      poster: null,
      source:
        "https://storage.googleapis.com/game_booster/demo/royal-match-01.mp4",
    },
  },
  {
    name: "Frozen Yogurt",
    id: new Date().getTime().toString(18),
    type: "image",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
    logo: "https://play-lh.googleusercontent.com/qBdVfwRCsI4KM7qewhJ0AKZKQjyD-DdxPDcdDbsRMhNO9zrwbefggn1vGqRIDZA3fg=s96-rw",
    video: {
      poster: null,
      source:
        "https://storage.googleapis.com/game_booster/demo/royal-match-01.mp4",
    },
  },
  {
    name: "Frozen Yogurt 2",
    id: new Date().getTime().toString(18),
    type: "playable",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
    logo: "https://play-lh.googleusercontent.com/qBdVfwRCsI4KM7qewhJ0AKZKQjyD-DdxPDcdDbsRMhNO9zrwbefggn1vGqRIDZA3fg=s96-rw",
    video: {
      poster: null,
      source:
        "https://storage.googleapis.com/game_booster/demo/royal-match-01.mp4",
    },
  },
  {
    name: "Frozen Yogurt 3",
    id: new Date().getTime().toString(18),
    type: "video",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
    logo: "https://play-lh.googleusercontent.com/qBdVfwRCsI4KM7qewhJ0AKZKQjyD-DdxPDcdDbsRMhNO9zrwbefggn1vGqRIDZA3fg=s96-rw",
    video: {
      poster: null,
      source:
        "https://storage.googleapis.com/game_booster/demo/royal-match-01.mp4",
    },
  },
  {
    name: "Frozen Yogurt",
    id: new Date().getTime().toString(18),
    type: "image",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
    logo: "https://play-lh.googleusercontent.com/qBdVfwRCsI4KM7qewhJ0AKZKQjyD-DdxPDcdDbsRMhNO9zrwbefggn1vGqRIDZA3fg=s96-rw",
    video: {
      poster: null,
      source:
        "https://storage.googleapis.com/game_booster/demo/royal-match-01.mp4",
    },
  },
  {
    name: "Frozen Yogurt 2",
    id: new Date().getTime().toString(18),
    type: "playable",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
    logo: "https://play-lh.googleusercontent.com/qBdVfwRCsI4KM7qewhJ0AKZKQjyD-DdxPDcdDbsRMhNO9zrwbefggn1vGqRIDZA3fg=s96-rw",
    video: {
      poster: null,
      source:
        "https://storage.googleapis.com/game_booster/demo/royal-match-01.mp4",
    },
  },
  {
    name: "Frozen Yogurt 3",
    id: new Date().getTime().toString(18),
    type: "video",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
    logo: "https://play-lh.googleusercontent.com/qBdVfwRCsI4KM7qewhJ0AKZKQjyD-DdxPDcdDbsRMhNO9zrwbefggn1vGqRIDZA3fg=s96-rw",
    video: {
      poster: null,
      source:
        "https://storage.googleapis.com/game_booster/demo/royal-match-01.mp4",
    },
  },
  {
    name: "Frozen Yogurt",
    id: new Date().getTime().toString(18),
    type: "image",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
    logo: "https://play-lh.googleusercontent.com/qBdVfwRCsI4KM7qewhJ0AKZKQjyD-DdxPDcdDbsRMhNO9zrwbefggn1vGqRIDZA3fg=s96-rw",
    video: {
      poster: null,
      source:
        "https://storage.googleapis.com/game_booster/demo/royal-match-01.mp4",
    },
  },
  {
    name: "Frozen Yogurt 2",
    id: new Date().getTime().toString(18),
    type: "playable",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
    logo: "https://play-lh.googleusercontent.com/qBdVfwRCsI4KM7qewhJ0AKZKQjyD-DdxPDcdDbsRMhNO9zrwbefggn1vGqRIDZA3fg=s96-rw",
    video: {
      poster: null,
      source:
        "https://storage.googleapis.com/game_booster/demo/royal-match-01.mp4",
    },
  },
  {
    name: "Frozen Yogurt 3",
    id: new Date().getTime().toString(18),
    type: "video",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
    logo: "https://play-lh.googleusercontent.com/qBdVfwRCsI4KM7qewhJ0AKZKQjyD-DdxPDcdDbsRMhNO9zrwbefggn1vGqRIDZA3fg=s96-rw",
    video: {
      poster: null,
      source:
        "https://storage.googleapis.com/game_booster/demo/royal-match-01.mp4",
    },
  },
  {
    name: "Frozen Yogurt",
    id: new Date().getTime().toString(18),
    type: "image",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
    logo: "https://play-lh.googleusercontent.com/qBdVfwRCsI4KM7qewhJ0AKZKQjyD-DdxPDcdDbsRMhNO9zrwbefggn1vGqRIDZA3fg=s96-rw",
    video: {
      poster: null,
      source:
        "https://storage.googleapis.com/game_booster/demo/royal-match-01.mp4",
    },
  },
  {
    name: "Frozen Yogurt 2",
    id: new Date().getTime().toString(18),
    type: "playable",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
    logo: "https://play-lh.googleusercontent.com/qBdVfwRCsI4KM7qewhJ0AKZKQjyD-DdxPDcdDbsRMhNO9zrwbefggn1vGqRIDZA3fg=s96-rw",
    video: {
      poster: null,
      source:
        "https://storage.googleapis.com/game_booster/demo/royal-match-01.mp4",
    },
  },
  {
    name: "Frozen Yogurt 3",
    id: new Date().getTime().toString(18),
    type: "video",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
    logo: "https://play-lh.googleusercontent.com/qBdVfwRCsI4KM7qewhJ0AKZKQjyD-DdxPDcdDbsRMhNO9zrwbefggn1vGqRIDZA3fg=s96-rw",
    video: {
      poster: null,
      source:
        "https://storage.googleapis.com/game_booster/demo/royal-match-01.mp4",
    },
  },
  {
    name: "Frozen Yogurt",
    id: new Date().getTime().toString(18),
    type: "image",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
    logo: "https://play-lh.googleusercontent.com/qBdVfwRCsI4KM7qewhJ0AKZKQjyD-DdxPDcdDbsRMhNO9zrwbefggn1vGqRIDZA3fg=s96-rw",
    video: {
      poster: null,
      source:
        "https://storage.googleapis.com/game_booster/demo/royal-match-01.mp4",
    },
  },
  {
    name: "Frozen Yogurt 2",
    id: new Date().getTime().toString(18),
    type: "playable",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
    logo: "https://play-lh.googleusercontent.com/qBdVfwRCsI4KM7qewhJ0AKZKQjyD-DdxPDcdDbsRMhNO9zrwbefggn1vGqRIDZA3fg=s96-rw",
    video: {
      poster: null,
      source:
        "https://storage.googleapis.com/game_booster/demo/royal-match-01.mp4",
    },
  },
  {
    name: "Frozen Yogurt 3",
    id: new Date().getTime().toString(18),
    type: "video",
    cost: 45.32,
    channels: ["facebook", "unity", "tiktok"],
    created_at: 1698591653,
    logo: "https://play-lh.googleusercontent.com/qBdVfwRCsI4KM7qewhJ0AKZKQjyD-DdxPDcdDbsRMhNO9zrwbefggn1vGqRIDZA3fg=s96-rw",
    video: {
      poster: null,
      source:
        "https://storage.googleapis.com/game_booster/demo/royal-match-01.mp4",
    },
  },
];

const show = ref(false);
const videoData: Ref<Video | null> = ref(null);
// Computed Properties
// Methods
function timestampToDate(unix: number): string {
  return dayjs.unix(unix).format("DD.MM.YYYY HH:mm");
}

function showPreview(row: any) {
  videoData.value = row.video;
  show.value = true;
}

function handleOnDialogClosed() {
  show.value = !show.value;
}
// Watch
// Vue Hooks (such as mounted, beforeMounted...)
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

.image-section {
  position: relative;
  &::after {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    content: "";
    z-index: 1;
    border-radius: 3px;
  }
  .play-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba($color: #000, $alpha: 0.5);
    color: #fff;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    display: none;
    z-index: 2;
  }

  &:hover {
    .play-icon {
      display: flex;
    }

    &::after {
      background-color: rgba($color: #000000, $alpha: 0.5);
    }
  }
}
</style>
