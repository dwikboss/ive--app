<template>
  <div class="page home">
    <div class="banner">
      <div class="full-width">
        <div class="banner-text">
          <img class="logo" alt="IVE logo" src="@/assets/images/logos/ivelogo-white.png" />
          <h1>SHOW WHAT <span style="font-size: 28px">i</span> HAVE</h1>
          <div class="undertext">
            <p>Amsterdam Ziggo Dome</p>
            <span class="middle-dot"></span>
            <p>15.06.2024</p>
          </div>
        </div>
      </div>
    </div>

    <div class="drawer">
      <div class="full-width">
        <RewardLoader />
        <h3>UPCOMING QUIZZES</h3>
        <QuizList />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RewardLoader from '@/components/RewardLoader.vue';
import QuizList from '@/components/QuizList.vue';
import { useDataStore } from '@/store/_DataStore';

export default defineComponent({
  name: 'HomeView',
  components: { RewardLoader, QuizList },
  mounted() {
    // dataStore.setQuestions(questionsData.quizzes);
  },
});
</script>

<style lang="scss" scoped>
.page.home {
  background-color: black;

  h1 {
    color: var(--white);
    font-size: 30px;
  }

  h3 {
    font-weight: 700;
  }

  .banner {
    background-image: url('@/assets/images/ziggodome-bg.jpg');
    height: 30vh;
    background-position: center center;
    background-size: cover;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.5);

    .full-width {
      height: 100%;
    }

    .banner-text {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .logo {
      max-width: 35px;
      margin-bottom: 15px;
    }

    .undertext {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 16px;
      margin-bottom: 25px;

      p {
        color: var(--white);
        font-size: 15px;
      }

      .middle-dot {
        height: 5px;
        width: 5px;
        background-color: var(--white);
        border-radius: 50%;
        display: inline-block;
      }
    }
  }

  .drawer {
    background-color: var(--white);
    margin-top: -5vh;
    border-radius: 50px 50px 0 0;
    padding-bottom: 25px;

    h3 {
      margin-top: 50px;
    }
  }
}
</style>
