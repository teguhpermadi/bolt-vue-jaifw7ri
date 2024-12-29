<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useLessonStore } from '../store/lessons';

const route = useRoute();
const router = useRouter();
const store = useLessonStore();

const lessonId = parseInt(route.params.id as string);
const lesson = computed(() => store.lessons.find(l => l.id === lessonId));
const currentQuestionIndex = ref(0);
const userAnswer = ref('');
const score = ref(0);

const currentQuestion = computed(() => {
  if (!lesson.value) return null;
  return lesson.value.questions[currentQuestionIndex.value];
});

const checkAnswer = () => {
  if (!currentQuestion.value) return;
  
  const isCorrect = userAnswer.value.toLowerCase() === currentQuestion.value.correctAnswer.toLowerCase();
  if (isCorrect) {
    score.value += 10;
  }
  
  if (currentQuestionIndex.value < (lesson.value?.questions.length || 0) - 1) {
    currentQuestionIndex.value++;
    userAnswer.value = '';
  } else {
    // Lesson completed
    store.completeLesson(lessonId, score.value);
    router.push('/');
  }
};
</script>

<template>
  <div v-if="lesson && currentQuestion" class="container mx-auto px-4 py-8 max-w-2xl">
    <div class="bg-white rounded-lg shadow-lg p-8">
      <div class="mb-8">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold">{{ lesson.title }}</h2>
          <span class="text-gray-600">
            Question {{ currentQuestionIndex + 1 }}/{{ lesson.questions.length }}
          </span>
        </div>
        <div class="h-2 bg-gray-200 rounded">
          <div
            class="h-full bg-green-500 rounded"
            :style="{ width: `${((currentQuestionIndex + 1) / lesson.questions.length) * 100}%` }"
          ></div>
        </div>
      </div>

      <div class="mb-8">
        <h3 class="text-xl mb-4">{{ currentQuestion.question }}</h3>
        
        <template v-if="currentQuestion.type === 'multiple-choice'">
          <div class="grid grid-cols-1 gap-4">
            <button
              v-for="option in currentQuestion.options"
              :key="option"
              class="p-4 border rounded-lg hover:bg-gray-50"
              @click="userAnswer = option"
              :class="{ 'border-green-500': userAnswer === option }"
            >
              {{ option }}
            </button>
          </div>
        </template>
        
        <template v-else>
          <input
            v-model="userAnswer"
            type="text"
            class="w-full p-4 border rounded-lg"
            placeholder="Type your answer..."
          >
        </template>
      </div>

      <button
        @click="checkAnswer"
        class="w-full bg-green-500 text-white py-4 rounded-lg hover:bg-green-600"
        :disabled="!userAnswer"
      >
        Check Answer
      </button>
    </div>
  </div>
</template>