<script setup lang="ts">
import { onMounted } from 'vue';
import { useLessonStore } from '../store/lessons';
import { useAuthStore } from '../store/auth';
import LessonCard from '../components/LessonCard.vue';

const lessonStore = useLessonStore();
const authStore = useAuthStore();

onMounted(async () => {
  if (authStore.user) {
    await Promise.all([
      lessonStore.loadLessons(),
      lessonStore.loadUserProgress(authStore.user.id)
    ]);
  }
});
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <header class="text-center mb-12">
      <h1 class="text-3xl font-bold mb-4">Learn Indonesian</h1>
      <p v-if="lessonStore.userProgress" class="text-gray-600">
        Total Score: {{ lessonStore.userProgress.score }}
      </p>
    </header>
    
    <div v-if="lessonStore.loading" class="text-center">
      <p class="text-gray-600">Loading lessons...</p>
    </div>
    
    <div v-else-if="lessonStore.lessons.length && lessonStore.userProgress" 
         class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <LessonCard
        v-for="lesson in lessonStore.lessons"
        :key="lesson.id"
        :lesson="lesson"
        :isCompleted="lessonStore.userProgress.completedLessons.includes(lesson.id)"
      />
    </div>
  </div>
</template>