<template>
  <div>
    <q-dialog v-model="visible" @hide="handleOnClose">
      <q-card class="!tw-max-w-[800px]">
        <q-btn
          class="close-btn"
          icon="sym_o_close"
          flat
          round
          dense
          v-close-popup
        />

        <q-card-section>
          <div v-if="props.video">
            <vue-plyr
              :options="options"
              style="height: 485px"
              class="tw-min-w-[800px]"
            >
              <video
                controls
                playsinline
                :data-poster="props.video.poster"
                width="420"
              >
                <source :src="props.video.source" type="video/mp4" />
              </video>
            </vue-plyr>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
// Import natives, 3rd party modules first...
import { ref, defineProps, defineEmits, watch, computed } from "vue";

// Interfaces
import { VideoPlayer } from "./VideoPlayer";
// Props
const props = defineProps<VideoPlayer>();

// Emits
const emits = defineEmits<{
  hide: [value: boolean];
}>();

// Variables
const visible = ref(false);
const options = ref({
  controls: [
    "play-large",
    "play",
    "progress",
    "current-time",
    "mute",
    "volume",
    "fullscreen",
  ],
});

// Computed Properties
const getShow = computed(() => props.show);

// Methods
function handleOnClose() {
  emits("hide", true);
}
// Watch
watch(getShow, (newValue) => {
  if (newValue) {
    visible.value = newValue;
  }
});
// Vue Hooks (such as mounted, beforeMounted...)
</script>

<style scoped lang="scss">
.close-btn {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 999;
}

.q-card__section--vert {
  padding: 0 !important;
}
</style>
