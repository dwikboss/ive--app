<template>
  <div class="question-video">
    <div class="video-container">
      <video :key="questionVideoKey">
        <source :src="questionVideo" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div v-if="captionShown" class="caption">{{ caption }}</div>
      <img class="cc-btn" src="@/assets/images/icons/cc.png" @click="toggleCaptions" />
      <button @click="playVideo"></button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useDataStore } from '@/store/_DataStore';

export default defineComponent({
  name: 'QuestionVideo',
  data() {
    return {
      isVideoVisible: true,
      captionShown: false,
    };
  },
  computed: {
    questionVideoKey() {
      return this.questionVideo;
    },
    questionVideo() {
      const videoSrc = useDataStore().quiz[0].questions[useDataStore().currentQuestionIndex].videoSrc;
      const path = new URL('@/assets/videos/', import.meta.url);
      this.videoLoaded();
      return `${path}/${videoSrc}`;
    },
    caption() {
      return useDataStore().quiz[0].questions[useDataStore().currentQuestionIndex].caption;
    },
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler(newQuestion) {
        if (newQuestion) {
          this.playVideo();
        }
      },
    },
  },
  methods: {
    playVideo() {
      const video = this.$el.querySelector('video');
      if (video) {
        video.play();
      }
    },
    videoLoaded() {
      console.log('loaded');
    },
    toggleCaptions() {
      this.captionShown = !this.captionShown;
    },
  },
});
</script>

<style lang="scss" scoped>
.question-video {
  width: 100%;
  height: 60vh;
}

.video-container {
  height: 100%;
  border-radius: 25px;
  position: relative;
  display: flex;
  justify-content: flex-end;

  .caption {
    background-color: rgba(0, 0, 0, 0.856);
    z-index: 999;
    position: absolute;
    bottom: 70px;
    margin-right: 25px;
    margin-left: 25px;
    color: white;
    font-size: 12px;
    font-weight: 400;
    padding: 15px;
    border-radius: 10px;
  }

  .cc-btn {
    position: absolute;
    right: 25px;
    bottom: 25px;
    z-index: 999;
  }
}

.video-container video {
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  z-index: 0;
  border-radius: 25px;
}

button {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
}
</style>
