<template>
  <div class="slider-pagination__button-wrapper">
    <span class="slider-pagination__button"></span>
  </div>
</template>

<script>
export default {
  name: "SliderImage",
  props: {
    image: Object,
  },
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.slider-pagination__button {
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid black;
  transition: 0.5s;
}
.slider-pagination__button_active {
  border: none;
  border-radius: 50%;
  background-color: black;
}
</style>
