<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <bookingheader></bookingheader>
    <breadcrumb></breadcrumb>
    <b-container>
    <b-row>
      <b-col md="4">
          <sidepartreserve></sidepartreserve>
          <formfilter></formfilter>
      </b-col>
       <b-col md="8">
      </b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import bookingheader from "@/components/bookingheader.vue";
import breadcrumb from "@/components/breadcrumb.vue";
import sidepartreserve from "@/components/sidepartreserve.vue";
import formfilter from "@/components/formfilter.vue";

export default {
  name: "home",
  components: {
    bookingheader,
    breadcrumb,
    sidepartreserve,
    formfilter
  }
};
</script>
