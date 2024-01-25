<template>
  <header class="header center">
    <Logo />
    <nav class="header__navigation">
      <Navigation />
    </nav>
    <div id="navIcon" class="nav-icon" @click="open">
      <Burger class="burger" />
    </div>
  </header>
</template>

<script>
import Navigation from "./Navigation.vue";
import Logo from "./Logo.vue";
import Burger from "./Burger.vue";

export default {
  name: "AppHeader",
  components: {
    Navigation,
    Logo,
    Burger,
  },
  props: {},
  methods: {
    open() {
      navIcon.addEventListener("click", (e) => {
        document.querySelector(".nav-icon").classList.toggle("active");
        document.querySelector(".nav-icon .nav-icon-line").classList.toggle("active");
        document.querySelector(".header__navigation").classList.toggle("active");
      });
    },
  },
};
</script>

<style scoped lang="scss">
.navlist {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 48px;
}
.header__navigation :deep(.navlist__item-link) {
  color: #292f36;
  text-align: center;
  font-family: Jost;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  transition: 0.3s;
  &:hover {
    color: #cda274;
  }
}
.nav-icon {
  display: none;
}
@media (max-width: 766px) {
  .header {
    padding-left: 16px;
    padding-right: 16px;
  }
  .header__navigation {
    position: absolute;
    padding: 58px 115px 58px 16px;
    right: 0px;
    top: -152px;
    background-color: white;
    transition: 0.5s;
    z-index: 3;
  }
  .header__navigation.active {
    top: 0;
  }
  .nav-icon {
    display: flex;
    flex-direction: column;
    position: absolute;
    cursor: pointer;
    top: 56px;
    right: 13px;
    width: 45px;
    height: 30px;
    z-index: 4;
  }
  .nav-icon.active {
    width: 30px;
  }
  .nav-icon :deep(.nav-icon-line),
  .nav-icon :deep(.nav-icon-line:before),
  .nav-icon :deep(.nav-icon-line:after) {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #292f36;
    transition: 0.3s;
  }
  .nav-icon :deep(.nav-icon-line:before) {
    content: "";
    top: -10px;
    transition: top 0.2s 0.2ss, transform 0.2s cubic-bezier(0.17, 0.67, 0.84, 0.18);
  }
  .nav-icon :deep(.nav-icon-line) {
    top: 20px;
  }
  .nav-icon :deep(.nav-icon-line:after) {
    content: "";
    bottom: -10px;
    transition: bottom 0.2s 0.2s, transform 0.2s cubic-bezier(0.17, 0.67, 0.84, 0.18);
  }
  .nav-icon :deep(.nav-icon-line.active:before) {
    content: "";
    top: 0px;
    transform: rotate(45deg);
    transition: top 0.2s, transform 0.2s 0.2s cubic-bezier(0.13, 0.73, 0.66, 0.19);
  }
  .nav-icon :deep(.nav-icon-line.active:after) {
    content: "";
    bottom: 0;
    transform: rotate(-45deg);
    transition: bottom 0.2s, transform 0.2s 0.2s cubic-bezier(0.13, 0.73, 0.66, 0.19);
  }
  .nav-icon :deep(.nav-icon-line.active) {
    background: rgba(255, 255, 255, 0);
  }
}
@media (max-width: 375px) {
  .header__navigation {
    padding-right: 72px;
  }
  .navlist {
    gap: 41px;
  }
}
</style>
