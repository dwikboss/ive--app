<template>
  <div class="question-bar">
    <div class="bar">
      <div class="bar-contents">
        <div class="back-container">
          <img src="@/assets/images/icons/arrow.png" />
        </div>
        <div class="timer-container">
          <img src="@/assets/images/icons/clock.png" />
          <p>0:30</p>
        </div>
        <div class="empty-container"></div>
      </div>

      <div class="question-progress">
        <div
          v-for="(question, index) in questions"
          :key="index"
          class="question-indicator"
          :class="{ active: index === currentQuestionIndex }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useDataStore } from '@/store/_DataStore';

export default defineComponent({
  name: 'QuestionBar',
  computed: {
    questions() {
      return useDataStore().quiz[0].questions || [];
    },
    currentQuestionIndex() {
      return useDataStore().currentQuestionIndex;
    },
    timer() {
      return useDataStore().timer;
    },
  },
  mounted() {
    console.log('bar');
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.question-bar {
  height: 10vh;
  .bar {
    display: flex;
    justify-content: end;
    flex-direction: column;
    height: 100%;
    gap: 20px;

    .bar-contents {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;

      .back-container,
      .timer-container,
      .empty-container {
        width: 33%;
      }

      .timer-container {
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;

        img {
          height: 24px;
        }
      }
    }

    // f6f6f6
    .question-progress {
      display: flex;
      gap: 10px;
      .question-indicator {
        height: 5px;
        background-color: #f6f6f6;
        width: 100%;
      }

      .question-indicator.active {
        background-color: #000000;
      }
    }

    img {
      height: 16px;
    }
  }
}
</style>
