<template>
  <!-- created by roshan -->
  <div>
    <navbar> </navbar>
    <b-container>
      <Madrid> </Madrid>
      <MainMadrid> </MainMadrid>
    </b-container>
    <BottomFooter></BottomFooter>
  </div>
</template>

<script>
import Madrid from "@/components/madrid-content.vue";
import MainMadrid from "@/components/madrid-main-content.vue";
import Navbar from "@/components/bookingheader.vue";
import BottomFooter from "@/components/footer.vue";

export default {
  components: {
    Madrid,
    MainMadrid,
    Navbar,
    BottomFooter
  }
};
</script>
<style lang="scss"></style>
