<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../store/auth';

const authStore = useAuthStore();
const router = useRouter();

const email = ref('');
const password = ref('');
const isRegister = ref(false);
const username = ref('');
const name = ref('');

const handleSubmit = async () => {
  if (isRegister.value) {
    await authStore.register(email.value, password.value, username.value, name.value);
  } else {
    await authStore.login(email.value, password.value);
  }
  
  if (authStore.user) {
    router.push('/dashboard');
  }
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold mb-6 text-center">
        {{ isRegister ? 'Create Account' : 'Welcome Back' }}
      </h1>
      
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div v-if="isRegister">
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            v-model="name"
            type="text"
            required
            class="w-full p-2 border rounded-lg"
          >
        </div>
        
        <div v-if="isRegister">
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            v-model="username"
            type="text"
            required
            class="w-full p-2 border rounded-lg"
          >
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            v-model="email"
            type="email"
            required
            class="w-full p-2 border rounded-lg"
          >
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            v-model="password"
            type="password"
            required
            class="w-full p-2 border rounded-lg"
          >
        </div>
        
        <button
          type="submit"
          class="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
          :disabled="authStore.loading"
        >
          {{ authStore.loading ? 'Loading...' : (isRegister ? 'Sign Up' : 'Sign In') }}
        </button>
        
        <p class="text-center text-sm text-gray-600">
          {{ isRegister ? 'Already have an account?' : "Don't have an account?" }}
          <button
            type="button"
            class="text-green-500 hover:underline"
            @click="isRegister = !isRegister"
          >
            {{ isRegister ? 'Sign In' : 'Sign Up' }}
          </button>
        </p>
      </form>
    </div>
  </div>
</template>