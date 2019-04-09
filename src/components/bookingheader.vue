<template>
  <div class="head-top">
    <b-container>
      <b-row>
        <b-col md="7" v-for="image in images" v-bind:key="image.index">
          <div class="img-display mt-3 text-left">
            <figure>
              <b-img :src="image.img" class="img-size" alt="img1" />
            </figure>
          </div>
        </b-col>
        <b-col md="5">
          <div class="mt-3">
            <font-awesome-icon
              class="text-light mr-3"
              :icon="['fas', 'rupee-sign']"
            />
            <font-awesome-icon
              class="text-light mr-3"
              :icon="['fas', 'rupee-sign']"
            />
            <b-button
              variant="outline-light"
              size="sm"
              class="mr-3 btn text-light font-weight-bold"
              >List Your Property</b-button
            >
            <b-button variant="light" size="sm" class="text-dark mr-3"
              >Register</b-button
            >
            <b-button variant="light" size="sm" class="text-dark mr-3"
              >Sign in</b-button
            >
          </div>
        </b-col>
        <b-col md="12">
          <div class="mb-3">
            <b-navbar class="p-0">
              <b-navbar-nav>
                <b-nav-item href="#" class="mr-3 small"
                  >Accomodation</b-nav-item
                >
                <b-nav-item href="#" class="mr-3 small">Flights</b-nav-item>
                <b-nav-item href="#" class="mr-3 small">Car rentals</b-nav-item>
                <b-nav-item href="#" class="mr-3 small"
                  >Airport taxis</b-nav-item
                >
              </b-navbar-nav>
            </b-navbar>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import img1 from "../assets/images/logo.png";

export default {
  data() {
    return {
      images: [
        {
          img: img1
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../assets/scss/booking/booking.scss";
.head-top {
   background-color: $headtop;
   height: 110px;
}
.img-size {
  height: 27px;
}
.btn:hover {
  color: #212529;
  background-color: transparent;
  border-color: #f8f9fa;
  box-shadow: none;
}
.navbar-light {
  .navbar-nav {
    .nav-link {
      color: #fff !important;
    }
  }
}
.nav-item:hover {
  background-color: $head-top-hover;
}
</style>
