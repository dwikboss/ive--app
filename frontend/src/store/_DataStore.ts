import { defineStore } from 'pinia';
import quizData from '@/assets/data/quizzes.json';
import type { Question } from '@/interfaces/_IQuestion';
import type { Quiz } from '@/interfaces/_IQuiz';
import { PageName } from '@/utils/_Constants';

interface DataStoreState {
  quiz: Quiz[];
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  calculatedScore: number;
  timer: number;
}

export const useDataStore = defineStore('data', {
  state: (): DataStoreState => ({
    quiz: [],
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    calculatedScore: 0,
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

    selectAnswer(selectedAnswer: string, route: any) {
      const currentQuestion = this.quiz[0].questions[this.currentQuestionIndex];

      if (currentQuestion) {
        if (selectedAnswer === currentQuestion.answers[currentQuestion.correctAnswerIndex]) {
          this.score += 1;
          this.calculatedScore += 75;
        }
      } else {
        console.error('No current question found.');
      }

      console.log('score ' + this.score);

      setTimeout(() => {
        this.moveToNextQuestion(route);
      }, 500);
    },

    moveToNextQuestion(router: any) {
      if (this.currentQuestionIndex < this.quiz[0].questions.length - 1) {
        this.currentQuestionIndex += 1;
        console.log(this.currentQuestionIndex);
        this.timer = 30;
      } else {
        console.log('Quiz completed! Your score:', this.score);
        router.push({
          name: PageName.RESULT,
        });
      }
    },
  },
});
