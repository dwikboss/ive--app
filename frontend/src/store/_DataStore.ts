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

      console.log('score ' + this.score);

      setTimeout(() => {
        this.moveToNextQuestion();
      }, 500);
    },

    moveToNextQuestion() {
      if (this.currentQuestionIndex < this.quiz[0].questions.length - 1) {
        this.currentQuestionIndex += 1;
        console.log(this.currentQuestionIndex);
        this.timer = 30;
      } else {
        console.log('Quiz completed! Your score:', this.score);
      }
    },
  },
});
