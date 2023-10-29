<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-2">
    <q-header class="bg-white text-grey-8 q-py-xs" height-hint="58" elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="sym_o_menu"
        />

        <div
          class="tw-flex tw-items-center tw-py-1.5 tw-px-3 tw-rounded-[3px] tw-ml-2 tw-cursor-pointer"
        >
          <q-toolbar-title shrink class="text-weight-bold tw-text-[14px]">
            GameAnalytics
          </q-toolbar-title>
        </div>

        <q-space />

        <div class="tw-min-w-[100px] tw-w-[55%] header-search-section">
          <q-input
            bg-color="grey-2"
            dense
            outlined
            rounded
            v-model="search"
            placeholder="Search campaign, channel, creative..."
            hide-bottom-space
          />
        </div>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="grey-8" icon="sym_o_dark_mode">
            <q-tooltip>Enable dark mode</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="sym_o_notifications">
            <q-badge floating color="red" rounded></q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn flat no-caps style="line-height: unset">
            <q-avatar size="36px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <div class="tw-flex tw-flex-col tw-items-center tw-ml-[8px]">
              <span class="tw-text-[11px] tw-font-semibold">Hasan M.</span>
              <span class="tw-text-[10px] tw-font-normal"
                >Apps Teknoloji A.Ş</span
              >
            </div>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      class="bg-white"
      :width="240"
      elevated
    >
      <q-scroll-area class="fit">
        <div class="tw-p-[8px]">
          <div
            class="tw-flex tw-items-center tw-text-gray-500 hover:tw-text-gray-800 tw-text-[12px] tw-px-2 tw-py-1 tw-cursor-pointer hover:tw-bg-gray-100 tw-rounded-[3px] tw-justify-between"
          >
            <q-avatar size="36px" rounded>
              <img
                src="https://play-lh.googleusercontent.com/qBdVfwRCsI4KM7qewhJ0AKZKQjyD-DdxPDcdDbsRMhNO9zrwbefggn1vGqRIDZA3fg=s96-rw"
              />
            </q-avatar>
            <span class="tw-font-semibold">Royal Match</span>
            <q-icon size="24px" name="sym_o_arrow_drop_down"></q-icon>
          </div>
        </div>
        <q-separator></q-separator>
        <div class="tw-uppercase tw-p-[8px] tw-text-[9px] tw-pb-0 tw-font-semibold text-grey-6">Menu</div>
        <q-list
          :style="{
            padding: '8px',
          }"
        >
          <q-item
            v-for="link in links1"
            :key="link.text"
            v-ripple="false"
            clickable
            :style="{
              borderRadius: '5px',
              fontSize: '13px',
            }"
            :exact="link.isExact"
            :to="link.to"
          >
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label style="font-size: 12px;">{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <div class="tw-p-[12px]">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { fabYoutube } from "@quasar/extras/fontawesome-v6";

export default {
  name: "MyLayout",

  setup() {
    const leftDrawerOpen = ref(false);
    const search = ref("");

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }

    return {
      fabYoutube,
      leftDrawerOpen,
      search,
      toggleLeftDrawer,
      links1: [
        { icon: "sym_o_home", text: "Dashboard", isExact: true, to: "/" },
        {
          icon: "sym_o_video_library",
          text: "Media Library",
          isExact: true,
          to: "/media-library",
        },
      ],
      buttons1: [
        { text: "About" },
        { text: "Press" },
        { text: "Copyright" },
        { text: "Contact us" },
        { text: "Creators" },
        { text: "Advertise" },
        { text: "Developers" },
      ],
      buttons2: [
        { text: "Terms" },
        { text: "Privacy" },
        { text: "Policy & Safety" },
        { text: "Test new features" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.header-search-section {
  :deep(.q-field--outlined .q-field__control) {
    &::before {
      border: none;
    }
    &::after {
      border: none;
    }
  }
  :deep(.q-field__control) {
    transition: 0.2s ease-in-out;
    &:hover {
      background-color: #eee !important;
    }
    .q-placeholder {
      &::placeholder {
        color: rgba($color: #000, $alpha: 0.35);
        font-size: 13px;
      }
    }
  }
}
</style>
