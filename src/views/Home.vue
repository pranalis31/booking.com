<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <bookingheader></bookingheader>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import bookingheader from "@/components/bookingheader.vue";

export default {
  name: "home",
  components: {
    bookingheader
  }
};
</script>
