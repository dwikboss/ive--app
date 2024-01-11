<template>
  <div class="quiz-tiles">
    <QuizTile
      :id="1"
      :quiztype="'How well do you know'"
      :artistname="'GAEUL & YUJIN'"
      :artistimage="`url('./src/assets/images/gy.png')`"
    />
    <QuizTile
      :id="2"
      :quiztype="'Finish the lyric with'"
      :artistname="'LEESEO'"
      :artistimage="`url('./src/assets/images/ls.png')`"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import QuizTile from '@/components/QuizTile.vue';

export default defineComponent({
  name: 'QuizList',
  components: { QuizTile },
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
