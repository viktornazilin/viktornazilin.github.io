<template lang="">
  <div class="counter__content-box" :class="counter.class"> <p
  class="counter__content-digit">{{ counter.digit }}</p> <p
  class="counter__content-text">{{ counter.text }}</p> </div> <p class="counter__line"
  :classline="counter.classline"></p>
</template>

<script>
export default {
  name: "Counter",
  props: {
    counter: Object,
  },
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.counter {
  &__content-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
  }

  &__content-box_1 {
    margin-right: 52px;
  }

  &__content-box_2 {
    margin-right: 76px;
  }

  &__content-box_3 {
    margin-right: 84px;
  }

  &__content-digit {
    margin-top: -10px;
    text-align: center;
    color: #cda274;
    font-family: DM Serif Display;
    font-size: 85px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1.7px;
  }

  &__content-text {
    color: #4d5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
  }

  &__line {
    height: 130px;
    width: 1px;
    background: #cda274;
  }

  &__line_1 {
    margin-right: 75px;
  }

  &__line_2 {
    margin-right: 75px;
  }

  &__line_3 {
    margin-right: 75px;
  }
  &__line_4 {
    display: none;
  }
}
</style>
