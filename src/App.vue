<template>
  <div class="min-h-screen bg-gray-100">
    <nav v-if="authStore.user" class="bg-green-500 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <router-link to="/" class="text-xl font-bold">Language Learning App</router-link>
        
        <div class="flex items-center space-x-4">
          <router-link to="/dashboard" class="hover:text-green-100">Dashboard</router-link>
          <router-link to="/profile" class="hover:text-green-100">Profile</router-link>
          <button @click="handleLogout" class="hover:text-green-100">Logout</button>
        </div>
      </div>
    </nav>
    
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from './store/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const handleLogout = () => {
  authStore.logout();
  router.push('/login');
};
</script>