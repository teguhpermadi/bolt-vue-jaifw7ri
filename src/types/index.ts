export interface Question {
  id: number;
  type: 'translate' | 'multiple-choice';
  question: string;
  correctAnswer: string;
  options?: string[];
}

export interface Lesson {
  id: number;
  title: string;
  questions: Question[];
}

export interface UserProgress {
  score: number;
  completedLessons: number[];
  lessonHistory: LessonHistory[];
  streak: number;
  lastLoginDate: string;
}

export interface LessonHistory {
  lessonId: number;
  completedAt: string;
  score: number;
}

export interface User {
  id: string;
  email: string;
  username: string;
  name: string;
  avatarUrl: string;
}

export interface UserStats {
  totalLessons: number;
  completedLessons: number;
  currentStreak: number;
  totalScore: number;
  averageScore: number;
}