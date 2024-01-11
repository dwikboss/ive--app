<template>
  <div class="nextreward-section">
    <p>next reward</p>
    <h2>IVE Photocard Set</h2>
    <div id="progress" class="progress">
      <div class="reward-image">
        <p id="currPoints">1120</p>
        <p id="targetPoints">unlocks at 1250</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProgressBar from 'progressbar.js';

export default defineComponent({
  name: 'RewardLoader',
  mounted() {
    var circle = new ProgressBar.Circle('#progress', {
      color: '#000000',
      duration: 3000,
      easing: 'easeInOut',
      strokeWidth: 6,
      trailWidth: 6,
    });

    circle.animate(0.62);
  },
});
</script>

<style lang="scss" scoped>
.nextreward-section {
  display: flex;
  justify-content: center;
  padding-top: 35px;
  flex-direction: column;
  align-items: center;

  #progress > svg {
    display: none !important;
    display: block;
  }

  h2 {
    margin-bottom: 25px;
  }

  .progress {
    width: 290px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .reward-image {
      width: 230px;
      height: 230px;
      background-image: url('@/assets/images/photocards.jpg');
      position: absolute;
      background-size: cover;
      border-radius: 50%;
      box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      #currPoints {
        color: white;
        font-size: 58px;
        font-weight: 700;
        line-height: 64px;
      }

      #targetPoints {
        color: white;
        font-size: 14px;
        font-weight: 400;
      }
    }
  }

  p {
    font-weight: 400;
    font-size: 14px;
  }
}
</style>
