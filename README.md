# Language Learning App

A Vue.js-based language learning application inspired by Duolingo, featuring user authentication, progress tracking, and an interactive learning experience.

## Features

- User authentication (login/register)
- Profile management (avatar, name, username)
- Interactive lessons
- Progress tracking
- Learning timeline
- Dashboard with statistics

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Supabase account

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with your Supabase credentials:
```
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

4. Start the development server:
```bash
npm run dev
```

## Usage

1. **Authentication**
   - Register a new account or login with existing credentials
   - Default test account: 
     - Email: user@example.com
     - Password: password

2. **Dashboard**
   - View your learning progress
   - Check your current streak
   - See completed lessons
   - Track your total score

3. **Lessons**
   - Browse available lessons
   - Complete interactive exercises
   - Earn points for correct answers

4. **Profile Management**
   - Upload profile picture
   - Update name and username
   - View achievement history

## Project Structure

```
src/
├── components/     # Reusable Vue components
├── views/          # Page components
├── store/          # Pinia stores
├── services/       # API and storage services
├── types/          # TypeScript interfaces
└── lib/           # Utility functions and configurations
```

## Tech Stack

- Vue 3
- TypeScript
- Vite
- Pinia (State Management)
- Vue Router
- TailwindCSS
- Supabase (Backend)