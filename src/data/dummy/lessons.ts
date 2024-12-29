export const dummyLessons = [
  {
    id: 1,
    title: 'Basics 1',
    description: 'Learn basic Indonesian greetings',
    questions: [
      {
        id: 1,
        type: 'translate',
        question: 'Hello',
        correctAnswer: 'Halo',
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'Good Morning in Indonesian is...',
        correctAnswer: 'Selamat Pagi',
        options: ['Selamat Malam', 'Selamat Pagi', 'Selamat Siang', 'Selamat Sore'],
      },
      {
        id: 3,
        type: 'translate',
        question: 'Thank you',
        correctAnswer: 'Terima kasih',
      },
    ],
  },
  {
    id: 2,
    title: 'Basics 2',
    description: 'Continue with basic phrases',
    questions: [
      {
        id: 4,
        type: 'translate',
        question: 'Good night',
        correctAnswer: 'Selamat malam',
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: 'How are you in Indonesian is...',
        correctAnswer: 'Apa kabar',
        options: ['Sampai jumpa', 'Apa kabar', 'Selamat datang', 'Permisi'],
      },
    ],
  },
  {
    id: 3,
    title: 'Numbers',
    description: 'Learn to count in Indonesian',
    questions: [
      {
        id: 6,
        type: 'translate',
        question: 'One',
        correctAnswer: 'Satu',
      },
      {
        id: 7,
        type: 'multiple-choice',
        question: 'Five in Indonesian is...',
        correctAnswer: 'Lima',
        options: ['Tiga', 'Empat', 'Lima', 'Enam'],
      },
    ],
  },
];

export const dummyUserProgress = {
  score: 120,
  completedLessons: [1, 2],
  streak: 3,
  lastLoginDate: new Date().toISOString(),
  lessonHistory: [
    {
      lessonId: 1,
      completedAt: '2024-03-10T08:30:00Z',
      score: 70,
    },
    {
      lessonId: 2,
      completedAt: '2024-03-11T09:15:00Z',
      score: 50,
    },
  ],
};