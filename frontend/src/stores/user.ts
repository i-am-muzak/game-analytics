import { defineStore } from "pinia";
import { ref, Ref } from "vue";
import { Cookies } from "quasar";

interface UserProfile {
  id: number;
  email: string;
  group: string;
  first_name: string;
  last_name: string;
  avatar: string | null;
  organization_id: number | null;
  created_at: string;
  updated_at: string;
}

export const useUserStore = defineStore("user", () => {
  const userProfile: Ref<UserProfile | null> = ref(null);

  function setUserProfile(payload: UserProfile) {
    userProfile.value = payload;
  }

  function getUserProfile(): UserProfile | null {
    return userProfile.value;
  }

  return { userProfile, setUserProfile, getUserProfile };
});
