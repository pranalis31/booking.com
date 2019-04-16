<template>
  <div class="head-top">
    <b-container>
      <b-row>
        <b-col md="6" v-for="image in images" v-bind:key="image.index">
          <div class="img-display mt-3 text-left">
            <figure>
              <b-img :src="image.img" class="logo-heading-size" alt="img1" />
            </figure>
          </div>
        </b-col>
        <b-col md="6">
          <div class="mt-3 ">
            <font-awesome-icon
              class="text-light small mr-2"
              :icon="['fas', 'rupee-sign']"
            />

            <b-img :src="imgicon" class="img-size ml-4 mr-4" alt="img1" />

            <b-button
              variant="outline-light"
              size="sm"
              class="mr-3 btn-font small text-light font-weight-bold"
              >List Your Property</b-button
            >
            <b-button
              variant="light"
              size="sm"
              class="text-dark font-weight-bold  btn-font mr-3"
              >Register</b-button
            >
            <b-button
              variant="light"
              size="sm"
              class="text-dark font-weight-bold  btn-font mr-3"
              >Sign in</b-button
            >
          </div>
        </b-col>
        <b-col md="12">
          <div class="mb-3">
            <b-navbar class="p-0">
              <b-navbar-nav>
                <b-nav-item href="#" class="mr-3 small active-nav"
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
import img2 from "../assets/images/iconflag.png";

export default {
  data() {
    return {
      imgicon: img2,
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
.logo-heading-size {
  height: 25px;
}
.btn-font {
  font-size: 10px !important;
}
.img-size {
  height: 15px;
}
.btn:hover {
  color: $color-black;
  background-color: transparent;
  border-color: $color-white;
  box-shadow: none;
}
.navbar-light {
  .navbar-nav {
    .nav-link {
      color: $white-color !important;
    }
  }
}

.navbar-light .navbar-nav .nav-link:hover {
  background-color: $head-top-hover;
  border-radius: 2px;
}
.active-nav {
  background-color: $head-top-hover;
  border-radius: 2px;
}
.btn-outline-light:hover {
  background-color: unset !important;
  border-color: unset !important;
}
</style>
