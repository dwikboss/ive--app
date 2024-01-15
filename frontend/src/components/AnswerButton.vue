<template>
  <button class="answer-button" :class="{ selected: isSelected }" @click="handleClick">{{ answer }}</button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AnswerButton',
  props: {
    answer: String,
  },
  data() {
    return {
      isSelected: false,
    };
  },
  methods: {
    handleClick() {
      this.isSelected = true;
      this.$emit('answer-selected', this.answer);

      setTimeout(() => {
        this.isSelected = false;
      }, 500);
    },
  },
});
</script>

<style scoped>
.answer-button {
  padding: 10px;
  background-color: #f6f6f6;
  border: none;
  cursor: pointer;
  border-radius: 15px;
  padding: 18px;
  font-weight: 500;
  font-size: 16px;
  transition: all 100ms ease;
}

.selected {
  background-color: #000000;
  color: #ffffff;
}
</style>
