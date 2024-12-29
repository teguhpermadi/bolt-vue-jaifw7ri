<script setup lang="ts">
import { computed } from 'vue';
import type { LessonHistory } from '../../types';

const props = defineProps<{
  history: LessonHistory[];
}>();

const sortedHistory = computed(() => {
  return [...props.history].sort((a, b) => 
    new Date(a.completedAt).getTime() - new Date(b.completedAt).getTime()
  );
});
</script>

<template>
  <div class="relative">
    <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>
    
    <div class="space-y-8 relative">
      <div
        v-for="(item, index) in sortedHistory"
        :key="index"
        class="flex items-center"
        :class="index % 2 === 0 ? 'justify-start' : 'justify-end'"
      >
        <div
          class="bg-white p-4 rounded-lg shadow-md w-80"
          :class="index % 2 === 0 ? 'mr-8' : 'ml-8'"
        >
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm text-gray-500">
              {{ new Date(item.completedAt).toLocaleDateString() }}
            </span>
            <span class="text-green-500 font-bold">+{{ item.score }} points</span>
          </div>
          <p class="font-semibold">Completed Lesson {{ item.lessonId }}</p>
        </div>
        
        <div
          class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-green-500 border-4 border-white"
        ></div>
      </div>
    </div>
  </div>
</template>