<template>
  <div class="page result">
    <div class="full-width flex-page">
      <div class="result-bar">
        <div class="bar">
          <div class="bar-contents">
            <div class="back-container">
              <img src="@/assets/images/icons/arrow.png" />
            </div>
            <div class="middle-container">
              <p>RESULTS</p>
            </div>
            <div class="empty-container"></div>
          </div>
        </div>
      </div>
      <div class="result-content">
        <div class="quizImg"></div>
        <h2>CONGRATULATIONS!</h2>
        <p>
          Thank you for playing
          <span style="font-weight: 500; color: #0000009e">How well do you know Gaeul & Yujin!</span>
        </p>
        <div class="score-container">
          <h4>YOUR SCORE</h4>
          <div class="score-line">
            <h2>{{ score }}</h2>
            <div class="divider">/</div>
            <h2 class="total">4</h2>
          </div>
        </div>

        <div class="score-container">
          <h4>YOUR POINTS</h4>
          <div class="score-line">
            <h2>{{ calculatedScore }}</h2>
          </div>
        </div>
      </div>
      <button class="home-button" @click="navHome">CONTINUE</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useDataStore } from '@/store/_DataStore';

export default defineComponent({
  name: 'ResultView',
  computed: {
    score() {
      return useDataStore().score;
    },
    calculatedScore() {
      return useDataStore().calculatedScore;
    },
  },
  methods: {
    navHome() {
      this.$router.push('/home');
    },
  },
});
</script>

<style lang="scss" scoped>
.result-bar {
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
      .middle-container,
      .empty-container {
        width: 33%;
        p {
          text-align: center;
          font-weight: 700;
          font-size: 20px;
        }
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
  }
}

.home-button {
  padding: 10px;
  background-color: black;
  border: none;
  cursor: pointer;
  border-radius: 15px;
  padding: 18px;
  font-weight: 500;
  font-size: 16px;
  transition: all 100ms ease;
  color: white;
  width: 100%;
  align-self: flex-end;
  margin-top: 50px;
}

.result-content {
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 20px;
    font-weight: 800;
  }

  p {
    font-size: 14px;
    text-align: center;
    width: 90%;
    margin-top: 10px;
  }

  .score-container {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
      letter-spacing: 2px;
      color: #5a5a5a;
      font-weight: 600;
    }

    .score-line {
      display: flex;
      align-items: center;
      gap: 15px;

      h2 {
        margin-top: 0;
        font-size: 42px;
      }

      .divider {
        font-weight: 600;
        font-size: 24px;
      }

      .total {
        color: #5a5a5a;
      }
    }
  }

  .quizImg {
    background-image: url('@/assets/images/gy.png');
    border-radius: 50%;
    width: 250px;
    height: 250px;
    background-position: center;
    background-size: 120%;
    background-color: black;
    background-repeat: no-repeat;
    margin-top: 35px;
  }
}
</style>
