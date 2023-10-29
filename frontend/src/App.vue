<template>
  <router-view />
</template>

<script setup lang="ts">
import { useQuasar } from "quasar";
import { onBeforeMount } from "vue";
const $q = useQuasar();

function replaceIcons() {
  $q.iconSet.datetime.arrowLeft = "sym_o_chevron_left";
  $q.iconSet.datetime.arrowRight = "sym_o_chevron_right";

  // Arrow
  $q.iconSet.arrow.dropdown = "sym_o_arrow_drop_down";
  // $q.iconSet.arrow.up = "sym_o_north";

  // Table
  $q.iconSet.table.lastPage = "sym_o_keyboard_double_arrow_right";
  $q.iconSet.table.firstPage = "sym_o_keyboard_double_arrow_left";
  $q.iconSet.table.nextPage = "sym_o_chevron_right";
  $q.iconSet.table.prevPage = "sym_o_chevron_left";
  $q.iconSet.table.arrowUp = "sym_o_arrow_drop_up";
}

onBeforeMount(() => {
  replaceIcons();
});
</script>
