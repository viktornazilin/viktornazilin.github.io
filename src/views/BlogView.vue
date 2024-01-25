<template>
  <main class="blog-main">
    <IntroBackground class="intro">
      <IntroText class="intro-blog__text" :text="text" v-for="text in blogTexts" />
    </IntroBackground>

    <section class="blog-post center">
      <h2 class="blog-post__title">Latest Post</h2>
      <div class="blog-post__latest-post">
        <ArticleCard
          class="blog-post__latest-post-subbox"
          :article="article"
          v-for="article in blogpostArticles"
        >
          <template #paragraphs>
            <p class="blog-post__latest-post-prgth blog-post__latest-post-prgth_1">
              {{ article.paragraphOne }}
            </p>
            <p class="blog-post__latest-post-prgth blog-post__latest-post-prgth_2">
              {{ article.paragraphTwo }}
            </p></template
          >
        </ArticleCard>
      </div>
    </section>
    <section class="articles center">
      <h2 class="articles__title">Articles & News</h2>
      <div
        class="blog__cardbox-container articles__blog-cardbox-container"
        id="cardbox-container"
      >
        <ArticleCard :article="article" v-for="article in articlesData">
          <template #button>
            <router-link to="/blog-details" class="blog__button">{{
              article.buttonText
            }}</router-link></template
          >
        </ArticleCard>
      </div>
      <div class="articles__pagination">
        <Button
          @click="paginate"
          data-id="01"
          class="pagination-button pagination-active"
          >{{ "01" }}</Button
        >
        <Button @click="paginate" data-id="02" class="pagination-button">{{
          "02"
        }}</Button>
        <Button @click="paginate" data-id="03" class="pagination-button">{{
          "03"
        }}</Button>
      </div>
    </section>
  </main>
</template>
<script>
// @ is an alias to /src

import IntroBackground from "@/components/IntroBackground.vue";
import IntroText from "@/components/IntroText.vue";
import ArticleCard from "@/components/ArticleCard.vue";
import Button from "@/components/Button.vue";

export default {
  name: "BlogView",
  components: {
    IntroBackground,
    IntroText,
    ArticleCard,
    Button,
  },
  data() {
    return {
      blogTexts: [
        {
          id: "blogText",
          title: "Articles & News",
          subheadOne: "Home",
          subheadTwo: "Blog",
          routerlink: "/blog",
        },
      ],
      blogpostArticles: [
        {
          id: "blopost-card-1",
          src: require("../assets/latest_post_image.png"),
          alt: "kitchen",
          heading: "10 Interior Design Trends That Will Rule 2023",
          paragraphOne:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.",
          paragraphTwo:
            "Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
          date: "21 November,2023",
          class: "blog-post__latest-post-text",
          head: "blog-post__latest-post-head",
        },
      ],
      articlesData: [
        {
          id: 1,
          src: require("../assets/blog_1.png"),
          alt: "interior",
          heading: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
          buttonText: "Kitchen Design",
        },
        {
          id: 2,
          src: require("../assets/blog_2.png"),
          alt: "interior",
          heading: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022",
          buttonText: "Living Design",
        },
        {
          id: 3,
          src: require("../assets/blog_3.png"),
          alt: "interior",
          heading: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
          buttonText: "Interior Design",
        },
        {
          id: 4,
          src: require("../assets/blog_4.png"),
          alt: "interior",
          heading: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
          buttonText: "Kitchen Design",
        },
        {
          id: 5,
          src: require("../assets/blog_5.png"),
          alt: "interior",
          heading: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022",
          buttonText: "Living Design",
        },
        {
          id: 6,
          src: require("../assets/blog_6.png"),
          alt: "interior",
          heading: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
          buttonText: "Interior Design",
        },
      ],
      fullArticlesData: [
        {
          id: 1,
          bnt: "01",
          src: require("../assets/blog_1.png"),
          alt: "interior",
          heading: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
          buttonText: "Kitchen Design",
        },
        {
          id: 2,
          bnt: "01",
          src: require("../assets/blog_2.png"),
          alt: "interior",
          heading: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022",
          buttonText: "Living Design",
        },
        {
          id: 3,
          bnt: "01",
          src: require("../assets/blog_3.png"),
          alt: "interior",
          heading: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
          buttonText: "Interior Design",
        },
        {
          id: 4,
          bnt: "01",
          src: require("../assets/blog_4.png"),
          alt: "interior",
          heading: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
          buttonText: "Kitchen Design",
        },
        {
          id: 5,
          bnt: "01",
          src: require("../assets/blog_5.png"),
          alt: "interior",
          heading: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022",
          buttonText: "Living Design",
        },
        {
          id: 6,
          bnt: "01",
          src: require("../assets/blog_6.png"),
          alt: "interior",
          heading: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
          buttonText: "Interior Design",
        },
        {
          id: 7,
          bnt: "02",
          src: require("../assets/blog_3.png"),
          alt: "interior",
          heading: "These new directions can help your space evolve.",
          date: "20 October,2022",
          buttonText: "Kitchen Design",
        },
        {
          id: 8,
          bnt: "02",
          src: require("../assets/blog_6.png"),
          alt: "interior",
          heading: "These new directions can help your space evolve.",
          date: "05 October,2022",
          buttonText: "Living Design",
        },
        {
          id: 9,
          bnt: "02",
          src: require("../assets/blog_5.png"),
          alt: "interior",
          heading: "These new directions can help your space evolve.",
          date: "28 October,2022",
          buttonText: "Interior Design",
        },
        {
          id: 10,
          bnt: "02",
          src: require("../assets/blog_4.png"),
          alt: "interior",
          heading: "These new directions can help your space evolve.",
          date: "08 October,2022",
          buttonText: "Kitchen Design",
        },
        {
          id: 11,
          bnt: "02",
          src: require("../assets/blog_2.png"),
          alt: "interior",
          heading: "These new directions can help your space evolve.",
          date: "16 October,2022",
          buttonText: "Living Design",
        },
        {
          id: 12,
          bnt: "02",
          src: require("../assets/blog_1.png"),
          alt: "interior",
          heading: "These new directions can help your space evolve.",
          date: "19 October,2022",
          buttonText: "Interior Design",
        },
        {
          id: 13,
          bnt: "03",
          src: require("../assets/blog_1.png"),
          alt: "interior",
          heading: "10 Interior Design Trends That Will Rule 2023",
          date: "16 November,2023",
          buttonText: "Kitchen Design",
        },
        {
          id: 14,
          bnt: "03",
          src: require("../assets/blog_2.png"),
          alt: "interior",
          heading: "10 Interior Design Trends That Will Rule 2023",
          date: "19 November,2023",
          buttonText: "Living Design",
        },
        {
          id: 15,
          bnt: "03",
          src: require("../assets/blog_4.png"),
          alt: "interior",
          heading: "10 Interior Design Trends That Will Rule 2023",
          date: "03 November,2023",
          buttonText: "Interior Design",
        },
        {
          id: 16,
          bnt: "03",
          src: require("../assets/blog_3.png"),
          alt: "interior",
          heading: "10 Interior Design Trends That Will Rule 2023",
          date: "01 November,2023",
          buttonText: "Kitchen Design",
        },
        {
          id: 17,
          bnt: "03",
          src: require("../assets/blog_6.png"),
          alt: "interior",
          heading: "10 Interior Design Trends That Will Rule 2023",
          date: "19 November,2023",
          buttonText: "Living Design",
        },
        {
          id: 18,
          bnt: "03",
          src: require("../assets/blog_5.png"),
          alt: "interior",
          heading: "10 Interior Design Trends That Will Rule 2023",
          date: "21 November,2023",
          buttonText: "Interior Design",
        },
      ],
    };
  },
  methods: {
    paginate(e) {
      const activeButton = document.querySelector(".pagination-active");
      activeButton.classList.remove("pagination-active");
      e.target.classList.add("pagination-active");
      this.articlesData = this.fullArticlesData.filter(
        (element) => element.bnt === e.target.dataset.id
      );
    },
  },
};
</script>

<style scoped lang="scss">
.blog-post__latest-post-subbox :deep(.blog-post__latest-post-head) {
  width: 490px;
}
.articles__blog-cardbox-container :deep(.blog-post__latest-post-head) {
  width: 342px;
  margin-bottom: 52px;
}
.pagination-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  border: 1px solid #cda274;
  border-radius: 50%;
  background-color: transparent;
  color: #292f36;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  text-transform: capitalize;
  transition: 0.3s linear;
  &:hover {
    background-color: #f4f0ec;
    border: none;
  }
}
.pagination-active {
  background-color: #cda274;
  border: 1px solid #cda274;
}
@media (max-width: 1024px) {
  .blog-post__latest-post-subbox {
    flex-wrap: wrap;
    gap: 30px;
    flex-direction: column;
  }
  .articles__blog-cardbox-container {
    grid-template-columns: repeat(1, auto);
  }
  .articles__title {
    text-align: center;
  }
  .blog-post {
    padding-top: 123px;
  }
  .articles__pagination {
    padding-top: 60px;
    padding-bottom: 150px;
  }
}
@media (max-width: 767px) {
  .intro :deep(.intro__heading) {
    text-align: center;
  }

  .blog-post__title {
    text-align: center;
  }

  .blog-post__latest-post-subbox :deep(.blog-post__latest-post-head) {
    width: 316px;
  }
  .blog-post__latest-post-prgth {
    width: 316px;
  }
}
@media (max-width: 375px) {
  .blog-post {
    padding-left: 8px;
    padding-right: 8px;
  }
  .articles__blog-cardbox-container[data-v-561c77be] {
    grid-template-columns: repeat(1, 316px);
  }
  .articles {
    padding-left: 8px;
    padding-right: 8px;
  }

  .articles__blog-cardbox-container :deep(.blog-post__latest-post-head) {
    width: 260px;
  }
  .blog-post__latest-post-subbox :deep(.blog-post__latest-post-head) {
    width: 260px;
  }
  .blog__button {
    top: 180px;
  }
  .blog-post__latest-post-prgth {
    width: 260px;
  }
  .articles__pagination {
    padding-bottom: 50px;
  }
}
</style>
