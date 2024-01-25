<template>
  <main class="main-blog-details">
    <section class="blog-details__intro">
      <div class="blog-details__intro-image"></div>
    </section>

    <div id="blogdetails" class="blog-details__box center">
      <div class="blog-details">
        <BlogDetailsArticle :article="article" v-for="article in sortedArray" />
      </div>

      <div class="blog-details__aside">
        <h3 class="blog-details__aside-title">{{ title }}</h3>
        <div class="blog-details__buttons">
          <Button
            class="blog-details__button"
            @click="filters"
            :button="button"
            v-for="button in buttons"
            :id="button.id"
          >
            {{ button.text }}
          </Button>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import BlogDetailsArticle from "@/components/BlogDetailsArticle.vue";
import Button from "@/components/Button.vue";

export default {
  name: "BlogDetailsView",
  components: {
    BlogDetailsArticle,
    Button,
  },
  data() {
    return {
      title: "Tag",
      sortedArray: [
        {
          id: "kitchen",
          title: "Let’s Get Solution for Building Construction Work",
          date: "26 December,2022",
          link: "Interior / Home / Decore",
          firstpargth:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don’t look even slightly believable.",
          secondpargth:
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          src: require("../assets/kitchen-1.jpg"),
          alt: "photo",
          quote: "The details are not the details. They make the design.",
          subtitle: "Design sprints are great",
          thirdpargth:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          firstnumber: "1",
          secondnumber: "2",
          thirdnumber: "3",
          fourthpargth:
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          secondsrc: require("../assets/kitchen-2.jpg"),
        },
      ],
      articles: [
        {
          id: "kitchen",
          title: "Let’s Get Solution for Building Construction Work",
          date: "26 December,2022",
          link: "Interior / Home / Decore",
          firstpargth:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don’t look even slightly believable.",
          secondpargth:
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          src: require("../assets/kitchen-1.jpg"),
          alt: "photo",
          quote: "The details are not the details. They make the design.",
          subtitle: "Design sprints are great",
          thirdpargth:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          firstnumber: "1",
          secondnumber: "2",
          thirdnumber: "3",
          fourthpargth:
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          secondsrc: require("../assets/kitchen-2.jpg"),
        },
        {
          id: "bedroom",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022",
          link: "Interior / Home / Decore",
          firstpargth:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don t look even slightly believable.",
          secondpargth:
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          src: require("../assets/bedroom-1.jpg"),
          alt: "photo",
          quote: "The details are not the details. They make the design.",
          subtitle: "Design sprints are great",
          thirdpargth:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          firstnumber: "1",
          secondnumber: "2",
          thirdnumber: "3",
          fourthpargth:
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          secondsrc: require("../assets/bedroom-2.jpg"),
        },
        {
          id: "building",
          title:
            "Building, a usually roofed and walled structure built for permanent use.",
          date: "20 December,2022",
          link: "Country / City / Building",
          firstpargth:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don t look even slightly believable.",
          secondpargth:
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          src: require("../assets/building-1.jpg"),
          alt: "photo",
          quote:
            "Good buildings come from good people, and all problems are solved by good design.",
          subtitle: "We shape our buildings; thereafter, they shape us.",
          thirdpargth:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          firstnumber: "1",
          secondnumber: "2",
          thirdnumber: "3",
          fourthpargth:
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          secondsrc: require("../assets/building-2.jpg"),
        },
        {
          id: "architecture",
          title:
            "Our paper emphasizes the importance of the kitchen layout in facilitating consumers food hygiene practices.",
          date: "29 December,2022",
          link: "Country / City / Architecture",
          firstpargth:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don t look even slightly believable.",
          secondpargth:
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          src: require("../assets/architecture-1.jpg"),
          alt: "photo",
          quote: "Architecture is a visual art, and the buildings speak for themselves.",
          subtitle:
            "Architecture around the world by contemporary architects including cutting-edge houses, skyscrapers, cultural buildings, hotels, airports, apartments.",
          thirdpargth:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          firstnumber: "1",
          secondnumber: "2",
          thirdnumber: "3",
          fourthpargth:
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          secondsrc: require("../assets/architecture-2.jpg"),
        },
        {
          id: "kitchen-planning",
          title: "Kitchen Planning: Selecting the Right Layout",
          date: "25 December,2022",
          link: "Interior / Home / Kitchen",
          firstpargth:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don t look even slightly believable.",
          secondpargth:
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          src: require("../assets/planning-1.jpg"),
          alt: "photo",
          quote: "The kitchen is the heart of the home.",
          subtitle:
            "Kitchens should be designed around whats truly important – fun, food, and life.",
          thirdpargth:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          firstnumber: "1",
          secondnumber: "2",
          thirdnumber: "3",
          fourthpargth:
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          secondsrc: require("../assets/planning-2.jpg"),
        },
      ],

      buttons: [
        { id: "kitchen", text: "Kitchen" },
        { id: "bedroom", text: "Bedroom" },
        { id: "building", text: "Building" },
        { id: "architecture", text: "Architecture" },
        { id: "kitchen-planning", text: "Kitchen Planning" },
      ],
    };
  },
  methods: {
    filters(e) {
      if (document.querySelector(".button-active") !== null) {
        document.querySelector(".button-active").classList.remove("button-active");
      }
      e.target.classList.add("button-active");
      this.sortedArray = this.articles.filter((article) => article.id === e.target.id);
    },
  },
};
</script>

<style scoped lang="scss">
.button {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px 30px;
  color: #292f36;
  text-align: center;
  font-family: Jost;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 0.36px;
  border-radius: 10px;
  background: #f4f0ec;
  border: none;
  &-active {
    background: #292f36;
    color: #ffffff;
  }
}
@media (max-width: 1280px) {
  .blog-details__box {
    flex-direction: column-reverse;
    align-items: center;
  }
}
@media (max-width: 1024px) {
  .blog-details {
    max-width: 733px;
  }
}
@media (max-width: 425px) {
  .blog-details {
    max-width: 380px;
  }
  .blog-details__box :deep(.blog-details__date-box) {
    gap: 20px;
  }
  .blog-details__box :deep(.blog-details__quote-content) {
    padding: 20px 30px;
  }
  .blog-details__box :deep(.blog-details__title) {
    text-align: center;
  }
}
@media (max-width: 424px) {
  .blog-details__aside {
    align-items: center;
  }
  .blog-details__buttons {
    align-items: center;
    justify-content: center;
  }
  .blog-details {
    max-width: 315px;
  }
  .blog-details__box :deep(.blog-details__date-box) {
    flex-direction: column;
  }
}
</style>
