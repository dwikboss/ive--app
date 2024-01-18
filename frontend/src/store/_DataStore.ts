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
  calculatedTotalScore: number;
  timer: number;
  quizTimers: Record<number, number>;
}

export const useDataStore = defineStore('data', {
  state: (): DataStoreState => ({
    quiz: [],
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    calculatedScore: 0,
    calculatedTotalScore: 0,
    timer: 30,
    quizTimers: {},
  }),
  actions: {
    startQuizTimer() {
      for (const quiz of quizData.quizzes) {
        this.quizTimers[quiz.id] = quiz.timer;
      }

      setInterval(() => {
        for (const quizId in this.quizTimers) {
          if (Object.prototype.hasOwnProperty.call(this.quizTimers, quizId)) {
            const remainingTime = this.quizTimers[quizId];

            if (remainingTime > 0) {
              this.quizTimers[quizId]--;
              console.log(`Quiz ${quizId} remaining time: ${this.quizTimers[quizId]} seconds`);
            }
          }
        }
      }, 1000);
    },

    loadQuizData(quizId: number) {
      this.score = 0;
      this.calculatedScore = 0;
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
        this.currentQuestionIndex = 0;
        this.calculatedTotalScore += this.calculatedScore;
        router.push({
          name: PageName.RESULT,
        });
      }
    },
  },
});
