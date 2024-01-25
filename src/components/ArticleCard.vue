<template>
  <div class="blog__cardbox">
    <img :src="article.src" :alt="article.alt" class="blog__image" />
    <article :class="article.class">
      <h3 class="blog__head blog-post__latest-post-head">{{ article.heading }}</h3>
      <slot name="paragraphs" />
      <div class="blog__data-arrow-box">
        <p class="blog__date">{{ article.date }}</p>
        <router-link to="/blog-details" class="blog__arrowbox">
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.77144 14.9527L7.71429 8.267L1.77144 1.58128"
              stroke="#292F36"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </router-link>
      </div>
      <slot name="button" />
    </article>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",
  props: {
    article: Object,
  },
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss"></style>
