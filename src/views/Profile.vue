<script setup lang="ts">
import { ref, computed } from 'vue';
import { useAuthStore } from '../store/auth';

const authStore = useAuthStore();
const name = ref(authStore.user?.name || '');
const username = ref(authStore.user?.username || '');
const newPassword = ref('');
const avatarFile = ref<File | null>(null);

const isFormChanged = computed(() => {
  return name.value !== authStore.user?.name || 
         username.value !== authStore.user?.username ||
         newPassword.value !== '';
});

const handleAvatarChange = async (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files?.length) {
    avatarFile.value = input.files[0];
    await authStore.uploadAvatar(avatarFile.value);
  }
};

const updateProfile = async () => {
  const updates: Partial<User> = {};
  
  if (name.value !== authStore.user?.name) {
    updates.name = name.value;
  }
  if (username.value !== authStore.user?.username) {
    updates.username = username.value;
  }
  
  if (Object.keys(updates).length > 0) {
    await authStore.updateProfile(updates);
  }
};
</script>

<template>
  <div class="container mx-auto px-4 py-8 max-w-2xl">
    <div class="bg-white rounded-xl shadow-md p-8">
      <h1 class="text-2xl font-bold mb-6">Edit Profile</h1>
      
      <div class="mb-8 text-center">
        <div class="relative inline-block">
          <img
            :src="authStore.user?.avatarUrl || '/default-avatar.png'"
            alt="Profile"
            class="w-32 h-32 rounded-full mb-4 object-cover"
          >
          <label
            class="absolute bottom-0 right-0 bg-green-500 text-white p-2 rounded-full cursor-pointer hover:bg-green-600"
            :class="{ 'opacity-50 cursor-not-allowed': authStore.loading }"
          >
            <span class="text-xl">📷</span>
            <input
              type="file"
              class="hidden"
              accept="image/*"
              @change="handleAvatarChange"
              :disabled="authStore.loading"
            >
          </label>
        </div>
        
        <p v-if="authStore.error" class="text-red-500 text-sm mt-2">
          {{ authStore.error }}
        </p>
      </div>
      
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            v-model="name"
            type="text"
            class="w-full p-2 border rounded-lg"
            :disabled="authStore.loading"
          >
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            v-model="username"
            type="text"
            class="w-full p-2 border rounded-lg"
            :disabled="authStore.loading"
          >
        </div>
        
        <button
          @click="updateProfile"
          class="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="authStore.loading || !isFormChanged"
        >
          {{ authStore.loading ? 'Saving...' : 'Save Changes' }}
        </button>
      </div>
    </div>
  </div>
</template>