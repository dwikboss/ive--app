import { defineStore } from 'pinia';
import quizData from '@/assets/data/quizzes.json';
import type { Question } from '@/interfaces/_IQuestion';
import type { Quiz } from '@/interfaces/_IQuiz';

interface DataStoreState {
  quiz: Quiz[];
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  timer: number;
}

export const useDataStore = defineStore('data', {
  state: (): DataStoreState => ({
    quiz: [],
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    timer: 30,
  }),
  actions: {
    loadQuizData(quizId: number) {
      const selectedQuiz = quizData.quizzes.find((quiz) => quiz.id === quizId);

      if (selectedQuiz) {
        this.quiz = [selectedQuiz];
      } else {
        console.error(`Quiz with id ${quizId} not found.`);
      }
    },

    selectAnswer(selectedAnswer: string) {
      const currentQuestion = this.quiz[0].questions[this.currentQuestionIndex];

      if (currentQuestion) {
        if (selectedAnswer === currentQuestion.answers[currentQuestion.correctAnswerIndex]) {
          this.score += 1;
        }
      } else {
        console.error('No current question found.');
      }

      setTimeout(() => {
        this.moveToNextQuestion();
      }, 2000);
    },

    moveToNextQuestion() {
      console.log('next');
    },
  },
});
