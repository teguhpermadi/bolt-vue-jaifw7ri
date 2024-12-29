<script setup lang="ts">
import { computed } from 'vue';
import { useLessonStore } from '../store/lessons';
import { useAuthStore } from '../store/auth';
import StatsCard from '../components/dashboard/StatsCard.vue';
import ProgressTimeline from '../components/dashboard/ProgressTimeline.vue';

const lessonStore = useLessonStore();
const authStore = useAuthStore();

const stats = computed(() => ({
  totalLessons: lessonStore.lessons.length,
  completedLessons: lessonStore.userProgress?.completedLessons.length || 0,
  currentStreak: lessonStore.userProgress?.streak || 0,
  totalScore: lessonStore.userProgress?.score || 0,
}));
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="mb-8">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h1 class="text-3xl font-bold mb-2">Welcome back, {{ authStore.user?.name }}!</h1>
          <p class="text-gray-600">Keep up the great work learning Indonesian</p>
        </div>
        <router-link
          to="/profile"
          class="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <img
            :src="authStore.user?.avatarUrl || '/default-avatar.png'"
            alt="Profile"
            class="w-8 h-8 rounded-full"
          >
          <span class="text-gray-700">Edit Profile</span>
        </router-link>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total Score"
          :value="stats.totalScore"
          icon="🏆"
        />
        <StatsCard
          title="Current Streak"
          :value="stats.currentStreak"
          icon="🔥"
        />
        <StatsCard
          title="Completed Lessons"
          :value="`${stats.completedLessons}/${stats.totalLessons}`"
          icon="📚"
        />
        <StatsCard
          title="Today's Goal"
          value="2/3 lessons"
          icon="🎯"
        />
      </div>
    </div>

    <div class="bg-white rounded-xl p-6 shadow-md mb-8">
      <h2 class="text-xl font-bold mb-4">Your Learning Journey</h2>
      <ProgressTimeline
        v-if="lessonStore.userProgress?.lessonHistory"
        :history="lessonStore.userProgress.lessonHistory"
      />
    </div>
  </div>
</template>