<template>
  <div class="question-answers">
    <AnswerButton
      v-for="(answer, index) in currentQuestion.answers"
      :key="index"
      :answer="answer"
      @answer-selected="handleAnswerSelected"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AnswerButton from '@/components/AnswerButton.vue';
import { useDataStore } from '@/store/_DataStore';

export default defineComponent({
  name: 'QuestionAnswers',
  components: {
    AnswerButton,
  },
  computed: {
    currentQuestion() {
      return useDataStore().quiz[0].questions[useDataStore().currentQuestionIndex];
    },
  },
  mounted() {
    console.log(useDataStore().quiz[0].questions[useDataStore().currentQuestionIndex]);
  },
  methods: {
    handleAnswerSelected(answer: string) {
      console.log('Selected answer:' + answer);
      useDataStore().selectAnswer(answer);
    },
  },
});
</script>

<style scoped>
.question-answers {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 26vh;
}
</style>
