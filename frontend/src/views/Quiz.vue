<template>
  <div class="page quiz">
    <div class="full-width">
      <div class="quiz-container">
        <QuestionBar />
        <QuestionVideo />
        <QuestionAnswers />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useDataStore } from '@/store/_DataStore';
import QuestionBar from '@/components/QuestionBar.vue';
import QuestionVideo from '@/components/QuestionVideo.vue';
import QuestionAnswers from '@/components/QuestionAnswers.vue';

export default defineComponent({
  name: 'QuizView',
  components: { QuestionVideo, QuestionAnswers, QuestionBar },
  created() {
    const store = useDataStore();
    const quizId = this.$route.params.id;
    const parsedQuizId = parseInt(quizId as string);
    store.loadQuizData(parsedQuizId);
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.quiz-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100vh;
  gap: 20px;
}
</style>
