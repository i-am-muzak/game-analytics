<template>
  <router-view />
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { onBeforeMount } from 'vue';
const $q = useQuasar()

function replaceIcons() {
  $q.iconSet.datetime.arrowLeft = "sym_o_chevron_left";
  $q.iconSet.datetime.arrowRight = "sym_o_chevron_right";
}

onBeforeMount(() => {
  replaceIcons()
})
</script>
