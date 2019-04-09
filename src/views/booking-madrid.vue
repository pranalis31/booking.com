<template>
  <!-- created by roshan -->
  <div>
    <navbar> </navbar>
    <b-container>
      <Madrid> </Madrid>
      <MainMadrid> </MainMadrid>
    </b-container>
  </div>
</template>

<script>
import Madrid from "@/components/madrid-content.vue";
import MainMadrid from "@/components/madrid-main-content.vue";
import Navbar from "@/components/bookingheader.vue";

export default {
  components: {
    Madrid,
    MainMadrid,
    Navbar
  }
};
</script>
<style lang="scss"></style>
