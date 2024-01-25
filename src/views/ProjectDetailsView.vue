<template>
  <main class="project-details-main">
    <IntroBackground class="project-details__background" />
    <article class="project-details__content center">
      <div class="project-details__content-wrap">
        <h2 class="project-details__heading">{{ heading }}</h2>
        <p class="project-details__text">
          {{ firstPrgph }}
        </p>
        <p class="project-details__text">
          {{ secondPrgph }}
        </p>
      </div>
    </article>
    <div class="slider center">
      <div class="slider__content">
        <div class="slider-wrapper">
          <SliderImage
            :image="image"
            v-for="image in sliderImages"
            :id="image.id"
            :key="image.id"
            :src="image.src"
            alt="bedroom"
          />
        </div>
      </div>
    </div>
    <div @click="changeImage" class="slider-pagination center">
      <SliderPagination class="slider-pagination__button_active" />
      <SliderPagination />
      <SliderPagination />
    </div>
  </main>
</template>

<script>
import IntroBackground from "@/components/IntroBackground.vue";
import SliderImage from "@/components/SliderImage.vue";
import SliderPagination from "@/components/SliderPagination.vue";
import { mapState } from "vuex";

export default {
  name: "ProjectDetailsView",
  components: {
    IntroBackground,
    SliderImage,
    SliderPagination,
  },
  data() {
    return {
      sliderImages: [
        { id: "slider-image_1", src: require("../assets/slider.jpg") },
        { id: "slider-image_2", src: require("../assets/slider2.jpg") },
        { id: "slider-image_3", src: require("../assets/slider3.jpg") },
      ],
      sliderCounter: 0,
    };
  },
  methods: {
    changeImage() {
      let sliderCounter = 0;

      const sliderContentWidth = document.querySelector(".slider-wrapper");
      const sliderPagination = document.querySelectorAll(
        ".slider-pagination__button-wrapper"
      );
      function slideChange() {
        if (window.innerWidth >= 1440) {
          sliderContentWidth.style.transform = `translateX(${-sliderCounter * 1226}px)`;
        } else if (window.innerWidth >= 768) {
          sliderContentWidth.style.transform = `translateX(${-sliderCounter * 767}px)`;
        } else if (window.innerWidth >= 320) {
          sliderContentWidth.style.transform = `translateX(${-sliderCounter * 432}px)`;
        }
      }

      function changePaginationColor(position) {
        if (document.querySelector(".slider-pagination__button_active") !== null) {
          document
            .querySelector(".slider-pagination__button_active")
            .classList.remove("slider-pagination__button_active");
        }
        sliderPagination[position].firstElementChild.classList.add(
          "slider-pagination__button_active"
        );
      }
      sliderPagination.forEach((circle, position) => {
        circle.addEventListener("click", () => {
          sliderCounter = position;
          slideChange();
          changePaginationColor(sliderCounter);
        });
      });
    },
  },
  computed: {
    ...mapState(["heading", "firstPrgph", "secondPrgph"]),
  },
};
</script>

<style scoped lang="scss">
.project-details {
  &__background {
    background-image: url("../assets/backgroud-project-details.jpg");
    background-size: cover;
    display: flex;
    height: 364px;
  }
  &__content {
    padding-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &-wrap {
      max-width: 658px;
    }
  }
  &__heading {
    color: #292f36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
    margin-bottom: 8px;
  }
  &__text {
    color: #4d5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.18px;
    margin-bottom: 36px;
  }
}
.slider {
  &__content {
    max-width: 1201px;
    overflow: hidden;
  }
  &-item {
    margin-top: 61px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-wrapper {
    display: flex;
    flex-direction: row;
    gap: 25px;
    transition: all 1s;
    width: 3678px;
  }
  &-pagination {
    display: flex;
    flex-direction: row;
    gap: 15px;
    justify-content: center;
    padding-top: 15px;
    padding-bottom: 170px;
    cursor: pointer;
  }
}
.slider-image__zoom[data-v-81200830]:hover [data-v-388cd5fa] {
  transform: scale(1.1);
}
@media (max-width: 1024px) {
  .project-details__content {
    padding-top: 100px;
    text-align: center;
  }
  .slider__content {
    width: 761px;
  }
  .slider-wrapper {
    width: 2276px;
  }
}
@media (max-width: 375px) {
  .project-details__content {
    padding-left: 8px;
    padding-right: 8px;
  }
}
@media (max-width: 425px) {
  .slider,
  .slider-pagination {
    display: none;
  }
}
</style>
