<template>
  <div class="intro__title">
    <h2 class="intro__heading">{{ text.title }}</h2>
    <div class="intro__subhead-box">
      <router-link to="/" class="intro__subhead-box-item">{{
        text.subheadOne
      }}</router-link>
      <router-link :to="text.routerlink" class="intro__subhead-box-item">{{
        text.subheadTwo
      }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroText",
  props: {
    text: Object,
  },
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss"></style>
