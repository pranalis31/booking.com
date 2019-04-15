<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <bookingheader></bookingheader>
    <breadcrumb></breadcrumb>
    <b-container>
      <b-row>
        <b-col md="3">
          <sidepartreserve></sidepartreserve>
          <formfilter class="mt-1"></formfilter>
          <leftpart></leftpart>
          <testimonial class="mb-4"></testimonial>
        </b-col>
        <b-col md="9">
          <righttab></righttab>
          <rightheading></rightheading>
          <imggallery></imggallery>

          <b-row>
            <b-col md="7">
              <bookingtext></bookingtext>
              <bookingline></bookingline>
              <bookingparagraph></bookingparagraph>
              <bookingfacilites></bookingfacilites>
            </b-col>
            <b-col md="5">
              <bookingright></bookingright>
              <optionbox class="my-2"></optionbox>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <bookingfooter></bookingfooter>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import bookingheader from "@/components/bookingheader.vue";
import breadcrumb from "@/components/breadcrumb.vue";
import sidepartreserve from "@/components/sidepartreserve.vue";
import formfilter from "@/components/formfilter.vue";
import righttab from "@/components/righttab.vue";
import leftpart from "@/components/leftpart.vue";
import testimonial from "@/components/testimonial.vue";
import rightheading from "@/components/rightheading.vue";
import imggallery from "@/components/imggallery.vue";
import bookingtext from "@/components/bookingtext.vue";
import bookingline from "@/components/bookingline.vue";
import bookingparagraph from "@/components/bookingparagraph.vue";
import bookingfacilites from "@/components/bookingfacilites.vue";
import bookingright from "@/components/bookingright.vue";
import optionbox from "@/components/option.vue";
import bookingfooter from "@/components/footer.vue";

export default {
  name: "home",
  components: {
    bookingheader,
    breadcrumb,
    sidepartreserve,
    formfilter,
    righttab,
    leftpart,
    testimonial,
    rightheading,
    imggallery,
    bookingtext,
    bookingline,
    bookingparagraph,
    bookingfacilites,
    bookingright,
    optionbox,
    bookingfooter
  }
};
</script>
