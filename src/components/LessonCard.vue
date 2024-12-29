<script setup lang="ts">
import type { Lesson } from '../types';

defineProps<{
  lesson: Lesson;
  isCompleted: boolean;
}>();
</script>

<template>
  <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <h3 class="text-xl font-bold mb-2">{{ lesson.title }}</h3>
    <div class="flex items-center justify-between">
      <span class="text-sm text-gray-600">{{ lesson.questions.length }} exercises</span>
      <span v-if="isCompleted" class="text-green-500">✓ Completed</span>
      <router-link
        v-else
        :to="'/lesson/' + lesson.id"
        class="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
      >
        Start
      </router-link>
    </div>
  </div>
</template>