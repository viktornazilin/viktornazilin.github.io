<template>
  <div class="projects__card" :data-id="project.dataid">
    <img
      :src="project.src"
      :alt="project.alt"
      class="projects__card-image"
      :class="project.class"
    />
    <div class="projects__card-content">
      <div class="projects__card-textbox" :class="project.classbottom">
        <h3 class="projects__card-title">{{ project.title }}</h3>
        <ul class="projects__card-list">
          <li class="projects__card-list-item projects__card-list-item_slash">
            {{ project.subject }}
          </li>
          <li class="projects__card-list-item">{{ project.field }}</li>
        </ul>
      </div>
      <router-link to="/project-details" class="projects__card-arrow-box">
        <svg
          class="projects__card-arrow"
          width="10"
          height="20"
          viewBox="0 0 10 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 19L9 10L1 1"
            stroke="#292F36"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
    </div>
    <slot class="star-image" />
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    project: Object,
  },
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss"></style>
