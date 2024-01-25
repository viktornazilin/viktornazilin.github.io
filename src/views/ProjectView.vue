<template>
  <main class="project-main">
    <IntroBackground class="intro-project">
      <IntroText class="intro-project__text" :text="text" v-for="text in introTexts" />
    </IntroBackground>
    <section class="project-content center">
      <div class="buttons-box">
        <Button
          class="button"
          @change="activeButton"
          @click="projectsFilter"
          v-for="button in buttons"
          :key="button.id"
          :id="button.id"
        >
          {{ button.text }}</Button
        >
      </div>
      <article class="project-cards-box">
        <ProjectCard
          class="project-card"
          :project="project"
          :data-id="project.dataid"
          v-for="project in projectCards"
          :key="project.id"
          :src="project.src"
          :class="project.class"
          @click="addToFavorites"
        >
          <img
            class="star"
            :src="require('../assets/star_1828970.png')"
            alt="star"
            :data-id="project.starid"
          />
        </ProjectCard>
      </article>
    </section>
  </main>
</template>

<script>
import IntroBackground from "@/components/IntroBackground.vue";
import IntroText from "@/components/IntroText.vue";
import Button from "@/components/Button.vue";
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  name: "ProjectView",
  props: {},
  components: {
    IntroBackground,
    IntroText,
    Button,
    ProjectCard,
  },
  data() {
    return {
      introTexts: [
        {
          id: "introText",
          title: "Our Project",
          subheadOne: "Home",
          subheadTwo: "Project",
          routerlink: "/project-details",
        },
      ],
      buttons: [
        { id: "bathroom", text: "Bathroom" },
        { id: "bedroom", text: "Bedroom" },
        { id: "kitchen", text: "Kitchen" },
        { id: "livingroom", text: "Living Area" },
      ],
      projectCards: [
        {
          id: "product-card1",
          dataid: "bedroom",
          src: require("../assets/project-card-1.png"),
          alt: "interio",
          title: "Minimal Bedroom",
          subject: "Decor",
          field: "Architecture",
          class: "project-card-image-1",
          starid: "star1",
        },
        {
          id: "product-card2",
          dataid: "bedroom",
          src: require("../assets/project-card-2.png"),
          alt: "interio",
          title: "Classic Minimal Bedroom",
          subject: "Decor",
          field: "Architecture",
          class: "project-card-image-2",
          starid: "star2",
        },
        {
          id: "product-card3",
          dataid: "bedroom",
          src: require("../assets/project-card-3.png"),
          alt: "interio",
          title: "Minimal Bedroom table",
          subject: "Decor",
          field: "Architecture",
          class: "project-card-image-3",
          starid: "star3",
        },
        {
          id: "product-card4",
          dataid: "bedroom",
          src: require("../assets/project-card-4.png"),
          alt: "interio",
          title: "Modern Medroom",
          subject: "Decor",
          field: "Architecture",
          class: "project-card-image-4",
          starid: "star4",
        },
        {
          id: "product-card5",
          dataid: "bedroom",
          src: require("../assets/project-card-5.png"),
          alt: "interio",
          title: "Minimal Bedroom",
          subject: "Decor",
          field: "Architecture",
          class: "project-card-image-5",
          starid: "star5",
        },
        {
          id: "product-card6",
          dataid: "bedroom",
          src: require("../assets/project-card-6.png"),
          alt: "interio",
          title: "Modern Bedroom",
          subject: "Decor",
          field: "Architecture",
          class: "project-card-image-6",
          starid: "star6",
        },
        {
          id: "product-card7",
          dataid: "bedroom",
          src: require("../assets/project-card-7.png"),
          alt: "interio",
          title: "System Table",
          subject: "Decor",
          field: "Architecture",
          class: "project-card-image-7",
          starid: "star7",
        },
        {
          id: "product-card8",
          dataid: "bedroom",
          src: require("../assets/project-card-8.png"),
          alt: "interio",
          title: "Modern Bedroom",
          subject: "Decor",
          field: "Architecture",
          class: "project-card-image-8",
          starid: "star8",
        },
      ],
      allProjects: [
        {
          id: "product-card1",
          dataid: "bedroom",
          src: require("../assets/project-card-1.png"),
          alt: "interio",
          title: "Minimal Bedroom",
          subject: "Decor",
          field: "Architecture",
          class: "project-card-image-1",
          starid: "star1",
        },
        {
          id: "product-card2",
          dataid: "bedroom",
          src: require("../assets/project-card-2.png"),
          alt: "interio",
          title: "Classic Minimal Bedroom",
          subject: "Decor",
          field: "Architecture",
          class: "project-card-image-2",
          starid: "star2",
        },
        {
          id: "product-card3",
          dataid: "bedroom",
          src: require("../assets/project-card-3.png"),
          alt: "interio",
          title: "Minimal Bedroom table",
          subject: "Decor",
          field: "Architecture",
          class: "project-card-image-3",
          starid: "star3",
        },
        {
          id: "product-card4",
          dataid: "bedroom",
          src: require("../assets/project-card-4.png"),
          alt: "interio",
          title: "Modern Medroom",
          subject: "Decor",
          field: "Architecture",
          class: "project-card-image-4",
          starid: "star4",
        },
        {
          id: "product-card5",
          dataid: "bedroom",
          src: require("../assets/project-card-5.png"),
          alt: "interio",
          title: "Minimal Bedroom",
          subject: "Decor",
          field: "Architecture",
          class: "project-card-image-5",
          starid: "star5",
        },
        {
          id: "product-card6",
          dataid: "bedroom",
          src: require("../assets/project-card-6.png"),
          alt: "interio",
          title: "Modern Bedroom",
          subject: "Decor",
          field: "Architecture",
          class: "project-card-image-6",
          starid: "star6",
        },
        {
          id: "product-card7",
          dataid: "bedroom",
          src: require("../assets/project-card-7.png"),
          alt: "interio",
          title: "System Table",
          subject: "Decor",
          field: "Architecture",
          class: "project-card-image-7",
          starid: "star7",
        },
        {
          id: "product-card8",
          dataid: "bedroom",
          src: require("../assets/project-card-8.png"),
          alt: "interio",
          title: "Modern Bedroom",
          subject: "Decor",
          field: "Architecture",
          class: "project-card-image-8",
          starid: "star8",
        },
        {
          id: "product-card9",
          dataid: "kitchen",
          src: require("../assets/project-card-kitchen-1.jpg"),
          alt: "kitchen",
          title: "Minimal Kitchen",
          subject: "Decor",
          field: "Interior",
          class: "project-card-image-9",
          starid: "star9",
        },
        {
          id: "product-card10",
          dataid: "kitchen",
          src: require("../assets/project-card-kitchen-2.jpg"),
          alt: "interio",
          title: "Classic Minimal Kitchen",
          subject: "Interior",
          field: "Architecture",
          class: "project-card-image-10",
          starid: "star10",
        },
        {
          id: "product-card11",
          dataid: "kitchen",
          src: require("../assets/project-card-kitchen-3.jpg"),
          alt: "interio",
          title: "Minimal Kitchen table",
          subject: "Decor",
          field: "Architecture",
          class: "project-card-image-11",
          starid: "star11",
        },
        {
          id: "product-card12",
          dataid: "kitchen",
          src: require("../assets/project-card-kitchen-4.jpg"),
          alt: "interio",
          title: "Modern Kitchen",
          subject: "Interior",
          field: "Architecture",
          class: "project-card-image-12",
          starid: "star12",
        },
        {
          id: "product-card13",
          dataid: "kitchen",
          src: require("../assets/project-card-kitchen-6.jpg"),
          alt: "interio",
          title: "Minimal Kitchen",
          subject: "Interior",
          field: "Architecture",
          class: "project-card-image-13",
          starid: "star13",
        },
        {
          id: "product-card14",
          dataid: "kitchen",
          src: require("../assets/project-card-kitchen-5.jpg"),
          alt: "interio",
          title: "Modern Kitchen",
          subject: "Interior",
          field: "Architecture",
          class: "project-card-image-14",
          starid: "star14",
        },
        {
          id: "product-card15",
          dataid: "kitchen",
          src: require("../assets/project-card-kitchen-7.jpg"),
          alt: "interio",
          title: "Small Corner",
          subject: "Interior",
          field: "Architecture",
          class: "project-card-image-15",
          starid: "star15",
        },
        {
          id: "product-card16",
          dataid: "kitchen",
          src: require("../assets/project-card-kitchen-8.jpg"),
          alt: "interio",
          title: "Modern Kitchen",
          subject: "Interior",
          field: "Architecture",
          class: "project-card-image-16",
          starid: "star16",
        },
        {
          id: "product-card17",
          dataid: "livingroom",
          src: require("../assets/project-card-livingroom-1.jpg"),
          alt: "living-room",
          title: "Modern Living Room",
          subject: "Decor",
          field: "Interior",
          class: "project-card-image-17",
          starid: "star17",
        },
        {
          id: "product-card18",
          dataid: "livingroom",
          src: require("../assets/project-card-livingroom-2.jpg"),
          alt: "living-room",
          title: "Classic Living Room",
          subject: "Interior",
          field: "Architecture",
          class: "project-card-image-18",
          starid: "star18",
        },
        {
          id: "product-card19",
          dataid: "livingroom",
          src: require("../assets/project-card-livingroom-3.jpg"),
          alt: "living-room",
          title: "Modern Living Room",
          subject: "Decor",
          field: "Architecture",
          class: "project-card-image-19",
          starid: "star19",
        },
        {
          id: "product-card20",
          dataid: "livingroom",
          src: require("../assets/project-card-livingroom-4.jpg"),
          alt: "living-room",
          title: "Modern Living Room",
          subject: "Interior",
          field: "Architecture",
          class: "project-card-image-20",
          starid: "star20",
        },
        {
          id: "product-card21",
          dataid: "livingroom",
          src: require("../assets/project-card-livingroom-6.jpg"),
          alt: "living-room",
          title: "Minimal Living Room",
          subject: "Interior",
          field: "Architecture",
          class: "project-card-image-21",
          starid: "star21",
        },
        {
          id: "product-card22",
          dataid: "livingroom",
          src: require("../assets/project-card-livingroom-5.jpg"),
          alt: "living-room",
          title: "Modern Living Room",
          subject: "Interior",
          field: "Architecture",
          class: "project-card-image-22",
          starid: "star22",
        },
        {
          id: "product-card23",
          dataid: "livingroom",
          src: require("../assets/project-card-livingroom-7.jpg"),
          alt: "living-room",
          title: "Cosy Sofa",
          subject: "Interior",
          field: "Architecture",
          class: "project-card-image-23",
          starid: "star23",
        },
        {
          id: "product-card24",
          dataid: "livingroom",
          src: require("../assets/project-card-livingroom-8.jpg"),
          alt: "living-room",
          title: "Modern Living Room",
          subject: "Interior",
          field: "Architecture",
          class: "project-card-image-24",
          starid: "star24",
        },
        {
          id: "product-card25",
          dataid: "bathroom",
          src: require("../assets/project-card-bathroom-1.jpg"),
          alt: "bathroom",
          title: "Modern Bathroom",
          subject: "Decor",
          field: "Interior",
          class: "project-card-image-25",
          starid: "star25",
        },
        {
          id: "product-card26",
          dataid: "bathroom",
          src: require("../assets/project-card-bathroom-2.jpg"),
          alt: "bathroom",
          title: "Classic Bathroom",
          subject: "Interior",
          field: "Architecture",
          class: "project-card-image-26",
          starid: "star26",
        },
        {
          id: "product-card27",
          dataid: "bathroom",
          src: require("../assets/project-card-bathroom-3.jpg"),
          alt: "bathroom",
          title: "Modern Bathroom",
          subject: "Decor",
          field: "Architecture",
          class: "project-card-image-27",
          starid: "star27",
        },
        {
          id: "product-card28",
          dataid: "bathroom",
          src: require("../assets/project-card-bathroom-4.jpg"),
          alt: "bathroom",
          title: "Modern Bathroom",
          subject: "Interior",
          field: "Architecture",
          class: "project-card-image-28",
          starid: "star28",
        },
        {
          id: "product-card29",
          dataid: "bathroom",
          src: require("../assets/project-card-bathroom-6.jpg"),
          alt: "bathroom",
          title: "Minimal Bathroom",
          subject: "Interior",
          field: "Architecture",
          class: "project-card-image-29",
          starid: "star29",
        },
        {
          id: "product-card30",
          dataid: "bathroom",
          src: require("../assets/project-card-bathroom-5.jpg"),
          alt: "bathroom",
          title: "Modern Bathroom",
          subject: "Interior",
          field: "Architecture",
          class: "project-card-image-30",
          starid: "star30",
        },
        {
          id: "product-card31",
          dataid: "bathroom",
          src: require("../assets/project-card-bathroom-7.jpg"),
          alt: "bathroom",
          title: "Bathroom",
          subject: "Interior",
          field: "Architecture",
          class: "project-card-image-31",
          starid: "star31",
        },
        {
          id: "product-card32",
          dataid: "bathroom",
          src: require("../assets/project-card-bathroom-8.jpg"),
          alt: "bathroom",
          title: "Modern Bathroom",
          subject: "Interior",
          field: "Architecture",
          class: "project-card-image-32",
          starid: "star32",
        },
      ],
      cardArticles: [
        {
          id: "article-card-1",
          src: require("../assets/blog_1.png"),
          alt: "interior",
          heading: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
          buttonText: "Kitchen Design",
        },
        {
          id: "article-card-2",
          src: require("../assets/blog_2.png"),
          alt: "interior",
          heading: "Low Cost Latest Invented Interior Designing Ideas",
          date: "22 December,2022",
          buttonText: "Living Design",
        },
        {
          id: "article-card-3",
          src: require("../assets/blog_3.png"),
          alt: "interior",
          heading: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
          buttonText: "Interior Design",
        },
      ],
    };
  },
  methods: {
    addToFavorites(e) {
      this.allProjects.forEach((elem, index) => {
        if (e.target.classList.contains(`project-card-image-${index}`)) {
          const star = document.querySelector(`[data-id="star${index}"]`);
          const hasFavorites = document
            .querySelector(`[data-id="star${index}"]`)
            .classList.toggle("favourites");
          star.src = hasFavorites
            ? require("../assets/star_3389176.png")
            : require("../assets/star_1828970.png");
        }
      });
    },
    projectsFilter(e) {
      if (document.querySelector(".button-active") !== null) {
        document.querySelector(".button-active").classList.remove("button-active");
      }
      e.target.classList.add("button-active");

      this.projectCards = this.allProjects.filter(
        (project) => project.dataid === e.target.id
      );
    },
  },
};
</script>

<style scoped lang="scss">
.project-content {
  padding-top: 200px;
  padding-bottom: 200px;
  display: flex;
  flex-direction: column;
  gap: 61px;
}
.buttons-box {
  display: flex;
  flex-direction: row;
  gap: 1px;
  margin-left: 160px;
  margin-right: 160px;
  justify-content: center;
  border: 1px solid #cda274;
  border-radius: 19px;
}
.intro-project {
  background-image: url("../assets/intro=project.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  &__text {
    display: flex;
    justify-content: center;
  }
}
.button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 219px;
  height: 75px;
  align-items: center;
  padding: 26px 57px;
  text-align: center;
  font-family: Jost;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%;
  letter-spacing: 1.36px;
  color: #292f36;
  background-color: white;
  border-radius: 18px;
  border: none;
  transition: 0.3s;
  &-active {
    background-color: #cda274;
    color: white;
  }
}
.project-cards-box {
  height: 3231px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 29px;
}
.project-cards-box :deep(.projects__card) {
  position: relative;
}

.star {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 26px;
  height: 24px;
}
.pagination-box {
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
}
@media (max-width: 1024px) {
  .button {
    width: 183px;
  }
  .buttons-box {
    margin-left: 0;
    margin-right: 0;
  }
  .project-cards-box {
    height: 100%;
    align-items: center;
  }
}
@media (max-width: 767px) {
  .buttons-box {
    display: flex;
    flex-direction: column;
    width: 219px;
    margin-left: auto;
    margin-right: auto;
  }
  .button {
    width: 219px;
  }
  .project-content {
    padding-top: 50px;
    padding-left: 8px;
    padding-right: 8px;
  }
  .intro-project__text {
    text-align: center;
  }
}
</style>
