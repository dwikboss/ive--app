<template>
  <div class="quiz-tiles">
    <QuizTile
      v-for="quiz in quizData.quizzes"
      :id="quiz.id"
      :key="quiz.id"
      :quiztype="quiz.title"
      :artistname="quiz.artistname"
      :artistimage="`url(${quiz.artistimage})`"
      :timer="quiz.timer"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import QuizTile from '@/components/QuizTile.vue';
import quizData from '@/assets/data/quizzes.json';

export default defineComponent({
  name: 'QuizList',
  components: { QuizTile },
  data() {
    return {
      quizData: quizData,
    };
  },
});
</script>

<style lang="scss" scoped>
.quiz-tiles {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
