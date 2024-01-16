<template>
  <div class="tile" :class="{ tile: true, 'disabled-tile': countdown > 0 }" @click="navigateToQuiz">
    <div class="tile-info">
      <p>450 points</p>
      <p id="quizCountdown">{{ formattedTimer }}</p>
    </div>
    <div class="tile-desc">
      <p>{{ quiztype }}</p>
      <p class="artist-name">{{ artistname }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PageName } from '@/utils/_Constants';

export default defineComponent({
  name: 'QuizTile',
  props: {
    id: { type: Number, default: 0 },
    quiztype: { type: String, default: '' },
    artistname: { type: String, default: '' },
    artistimage: { type: String, default: '' },
    timer: { type: Number, default: 0 },
  },
  data() {
    return {
      countdown: this.timer,
    };
  },
  computed: {
    formattedTimer(): string {
      const hours = Math.floor(this.countdown / 3600);
      const minutes = Math.floor((this.countdown % 3600) / 60);
      const seconds = this.countdown % 60;

      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
        2,
        '0'
      )}`;
    },
  },
  mounted() {
    let countdownInterval: any;

    const updateCountdown = () => {
      this.countdown -= 1;

      if (this.countdown <= 0) {
        clearInterval(countdownInterval);
      }
    };

    countdownInterval = setInterval(updateCountdown, 1000);
  },
  methods: {
    navigateToQuiz() {
      this.$router.push({
        name: PageName.QUIZ,
        params: { id: this.id.toString() },
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.disabled-tile {
  opacity: 0.9;
  pointer-events: none;
}

.tile {
  border-radius: 20px;
  min-height: 200px;
  padding: 20px 20px 15px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: v-bind('artistimage') no-repeat;
  background-position: 114% -50%;
  background-size: 70%;
  background-color: black;
  box-shadow: inset 0 -70px 50px 0px #000000;

  p {
    color: var(--white);
  }

  .tile-info {
    p:first-of-type {
      font-size: 14px;
    }

    p:nth-of-type(2) {
      font-size: 24px;
    }
  }

  .tile-desc {
    p {
      font-weight: 400;
    }

    p:first-of-type {
      margin-bottom: -5px;
    }

    p.artist-name {
      font-size: 32px;
      font-weight: 700;
    }
  }
}
</style>
