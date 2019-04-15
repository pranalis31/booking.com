<template>
  <b-container>
    <b-row>
      <b-breadcrumb
        class="bg-white text-primary small mr-5 "
        :items="items"
      ></b-breadcrumb>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Home",
          href: "#"
        },
        {
          text: "Spain",
          href: "#"
        },
        {
          text: "Community of madrid",
          href: "#"
        },
        {
          text: "Visit madrid",
          href: "#"
        },
        {
          text: "Madrid hotels",
          href: "#"
        },
        {
          text: "Cento",
          href: "#"
        },
        {
          text: "Vincci Centrum (Hotel) Madrid (Spain) dea;s",
          active: true
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.breadcrumb > li + li:before {
  content: "> " !important;
}
.breadcrumb > li a {
  padding: 0 0.35rem 0 0.35rem;
}
</style>
