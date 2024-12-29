<script setup lang="ts">
defineProps<{
  title: string;
  value: string | number;
  icon: string;
}>();
</script>

<template>
  <div class="bg-white rounded-xl p-6 shadow-md">
    <div class="flex items-center justify-between">
      <div>
        <p class="text-sm text-gray-500 mb-1">{{ title }}</p>
        <p class="text-2xl font-bold">{{ value }}</p>
      </div>
      <div class="text-green-500 text-2xl">{{ icon }}</div>
    </div>
  </div>
</template>