<template>
  <div class="page login">
    <div class="full-width">
      <div class="upper-section">
        <img class="logo" alt="IVE logo" src="@/assets/images/logos/ivelogo-white.png" />
        <h1>SHOW WHAT <span style="font-size: 28px">i</span> HAVE</h1>
        <div class="undertext">
          <h4>Amsterdam Ziggo Dome</h4>
          <span class="middle-dot"></span>
          <h4>15.06.2024</h4>
        </div>
      </div>
      <div class="button-area">
        <button class="sign-in" @click="navigateLogin">Sign in</button>
        <button class="sign-up">Sign up</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useDataStore } from '@/store/_DataStore';

export default defineComponent({
  name: 'LoginView',
  methods: {
    navigateLogin() {
      this.$router.push('/home');
      useDataStore().startQuizTimer();
    },
  },
});
</script>

<style lang="scss" scoped>
.page.login {
  background-image: url('@/assets/images/ziggodome-bg.jpg');
  height: 100vh;
  background-position: center center;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.75);

  .full-width {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    .upper-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 80%;
      justify-content: center;

      .logo {
        max-width: 100px;
        margin-bottom: 35px;
      }
    }

    .button-area {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 12px;
      height: 20%;
      justify-content: flex-end;
      margin-bottom: 35px;

      .sign-in {
        background-color: white;
        font-weight: bold;
        border-style: none;
        padding: 15px;
        border-radius: 8px;
        border: 1px solid rgb(255, 255, 255);
      }

      .sign-up {
        background-color: rgba(255, 255, 255, 0);
        font-weight: bold;
        border-style: none;
        padding: 15px;
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.486);
        color: white;
      }
    }
  }

  h1 {
    margin-top: 32px;
    margin-bottom: 5px;
    color: var(--white);
    text-align: center;
  }

  .undertext {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 17px;

    h4 {
      color: var(--white);
      font-weight: 400;
    }

    .middle-dot {
      height: 6px;
      width: 6px;
      background-color: var(--white);
      border-radius: 50%;
      display: inline-block;
    }
  }
}
</style>
