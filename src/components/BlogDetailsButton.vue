<template>
  <div class="blog-details__button">
    <label :data-id="button.id" @change="sortArticles"
      ><input
        :data-id="button.id"
        @click="filters"
        class="blog-details__input"
        type="radio"
        name="radio"
      />
      {{ button.text }}</label
    >
  </div>
</template>

<script>
export default {
  name: "BlogDetailsButton",
  props: {
    button: Object,
    sortArticles: Function,
    filters: Function,
  },
  data() {
    return {};
  },
};
</script>
