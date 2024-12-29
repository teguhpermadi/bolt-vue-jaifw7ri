import { defineStore } from 'pinia';
import type { Lesson, UserProgress } from '../types';
import { lessonService } from '../services/api/lessons';

export const useLessonStore = defineStore('lessons', {
  state: () => ({
    lessons: [] as Lesson[],
    userProgress: null as UserProgress | null,
    loading: false,
    error: null as string | null,
  }),
  
  actions: {
    async loadLessons() {
      try {
        this.loading = true;
        const { data, error } = await lessonService.getLessons();
        
        if (error) throw new Error(error);
        this.lessons = data;
      } catch (error: any) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },

    async loadUserProgress(userId: string) {
      try {
        this.loading = true;
        const { data, error } = await lessonService.getUserProgress(userId);
        
        if (error) throw new Error(error);
        this.userProgress = data;
      } catch (error: any) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },

    async completeLesson(userId: string, lessonId: number, score: number) {
      try {
        this.loading = true;
        const { data, error } = await lessonService.completeLesson(userId, lessonId, score);
        
        if (error) throw new Error(error);
        this.userProgress = data;
      } catch (error: any) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
});