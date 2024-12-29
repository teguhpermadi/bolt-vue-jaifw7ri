import { dummyLessons, dummyUserProgress } from '../../data/dummy/lessons';
import type { ApiResponse } from './types';
import type { Lesson, UserProgress } from '../../types';

export class LessonService {
  async getLessons(): Promise<ApiResponse<Lesson[]>> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
      data: dummyLessons,
      error: null,
    };
  }

  async getUserProgress(userId: string): Promise<ApiResponse<UserProgress>> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
      data: dummyUserProgress,
      error: null,
    };
  }

  async completeLesson(userId: string, lessonId: number, score: number): Promise<ApiResponse<UserProgress>> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newHistory = {
      lessonId,
      completedAt: new Date().toISOString(),
      score,
    };
    
    dummyUserProgress.score += score;
    if (!dummyUserProgress.completedLessons.includes(lessonId)) {
      dummyUserProgress.completedLessons.push(lessonId);
    }
    dummyUserProgress.lessonHistory.push(newHistory);
    
    return {
      data: dummyUserProgress,
      error: null,
    };
  }
}

export const lessonService = new LessonService();