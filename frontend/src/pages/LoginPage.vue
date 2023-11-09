<template>
  <div class="login-section">
    <div class="tw-flex tw-h-full">
      <div class="tw-w-8/12">
        <div class="tw-h-full">
          <q-carousel
            v-model="slide"
            swipeable
            animated
            navigation-position="bottom"
            navigation
            padding
            height="100%"
            class="rounded-borders bg-blue-1"
            control-color="primary"
            arrows
            navigation-icon="sym_o_radio_button_unchecked"
          >
            <q-carousel-slide name="style" class="column no-wrap">
              <div class="q-mt-md text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                et praesentium molestias, aut iure perferendis a tenetur minima
                dolore dolores facere officia explicabo, cum consectetur nulla
                modi optio sed mollitia.22
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column no-wrap flex-center">
              <div class="q-mt-md text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                et praesentium molestias, aut iure perferendis a tenetur minima
                dolore dolores facere officia explicabo, cum consectetur nulla
                modi optio sed mollitia.
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
      <div class="tw-w-4/12 tw-p-[60px] tw-text-center tw-h-full form-section">
        <div
          class="tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center tw-flex-col"
        >
          <div class="tw-font-bold tw-text-[32px] text-blue-8 tw-w-full">
            Welcome to GameAnalytics
          </div>
          <div class="tw-mt-2 tw-font-normal text-grey-7 tw-w-full">
            You need to login to review the demo app created by Hasan Muzak.
          </div>
          <div class="tw-mt-4 tw-text-[11px] tw-w-full">
            Please use
            <span class="text-blue-8"> "demo@hasanmuzak.com" </span> and
            <span class="text-blue-8"> "12345demo" </span> for credentials.
          </div>
          <div class="tw-mt-8 tw-w-full">
            <div>
              <div class="tw-text-[12px] text-grey-10 tw-text-left tw-mb-[3px]">
                E-mail Address
              </div>
              <q-input
                outlined
                v-model="email"
                placeholder="Email"
                clearable
                clear-icon="sym_o_close"
              >
                <template v-slot:prepend>
                  <q-icon name="sym_o_mail" />
                </template>
              </q-input>
            </div>
            <div class="tw-mt-4">
              <div class="tw-text-[12px] text-grey-10 tw-text-left tw-mb-[3px]">
                Password
              </div>
              <q-input
                type="password"
                outlined
                v-model="password"
                placeholder="Password"
                clearable
                clear-icon="sym_o_close"
              >
                <template v-slot:prepend>
                  <q-icon name="sym_o_lock" />
                </template>
              </q-input>
            </div>
            <div class="tw-mt-2 tw-flex tw-items-center tw-justify-between">
              <div>
                <q-checkbox
                  size="32px"
                  v-model="rememberMe"
                  label="Remember Me"
                />
              </div>
              <div
                class="tw-text-[11px] tw-font-semibold tw-text-blue-500 tw-cursor-pointer hover:tw-text-blue-700"
              >
                Forgot Password
              </div>
            </div>
            <div class="tw-mt-4">
              <q-btn
                icon="sym_o_login"
                color="primary"
                label="Sign In"
                size="22px"
                unelevated
                class="tw-w-full"
                @click="signIn"
                :loading="loading"
              />
            </div>

            <div class="tw-flex tw-items-center tw-mt-5">
              <div class="tw-w-full">
                <q-separator />
              </div>
              <div
                class="tw-px-4 tw-text-gray-400 tw-text-[11px] tw-font-semibold"
              >
                OR
              </div>
              <div class="tw-w-full">
                <q-separator />
              </div>
            </div>
            <div class="tw-mt-5">
              <q-btn
                label="Login with Google"
                size="22px"
                unelevated
                class="tw-w-full"
                color="grey-9"
                disabled
              />
            </div>
            <div class="tw-mt-4">
              <q-btn
                color="grey-9"
                label="Login with X"
                size="22px"
                unelevated
                disabled
                class="tw-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { api } from "boot/axios";
import { Cookies, Notify } from "quasar";
import { useRouter } from "vue-router";
import { useUserStore } from "stores/user";

const email = ref("demo@hasanmuzak.com");
const password = ref("12345demo");
const rememberMe = ref(true);
const slide = ref("style");
const loading = ref(false);
const router = useRouter();
const userStore = useUserStore();

async function signIn() {
  try {
    loading.value = true;

    const requestData = {
      email: email.value,
      password: password.value,
    };

    const response = await api.post(`auth/login`, requestData);
    if (response.status === 200) {
      Cookies.set("session", response.data.token, {
        expires: new Date(response.data.expires_at),
      });

      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;

      Notify.create({
        message: "You are logged in successfully. Please wait...",
        type: "positive",
      });

      setTimeout(() => {
        router.push({
          name: "index-page",
        });
      }, 2500);
    }
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      loading.value = false;
    }, 2500);
  }
}

onMounted(async () => {
  await router.isReady();
});
</script>

<style scoped lang="scss">
:deep(.q-field__label) {
  font-size: 13px !important;
}

:deep(.q-btn__content) {
  font-weight: 600;
  text-transform: capitalize;
}

:deep(.q-checkbox__label) {
  color: rgba($color: #000000, $alpha: 0.45);
}

.login-section {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  .form-section {
    box-shadow: 0 4px 24px 0 rgb(0 0 0 / 15%);
  }
}

:deep(.q-carousel) {
  font-variation-settings: "FILL" 1;
}
</style>
