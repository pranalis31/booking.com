<template>
  <!-- created by roshan -->
  <div>
    <div class="text-left">
      <div class="properties-text">
        Madrid: 817 properties found - including 88 with great value today!
      </div>
      <div class="accommodation ">
        <span>
          <font-awesome-icon :icon="['fas', 'car']" />
        </span>
        Book accommodation in Madrid and get 15% off all car rentals
      </div>
    </div>
    <div>
      <!-- <b-tabs pills>
        <b-tab title="Our top picks " active></b-tab>
        <b-tab title="Price (lowest first)"></b-tab>
        <b-tab title="Review score and price "></b-tab>
        <b-tab title="Stars "></b-tab>
        <b-tab title="Star rating and price "></b-tab>
        <b-tab title="Distance from city centre "></b-tab>
        <b-tab title="..."></b-tab>
      </b-tabs> -->

      <ul class="tab-list nav nav-pills">
        <li class="active"><a href="#">Our top picks </a></li>
        <li><a href="#">Price (lowest first)</a></li>
        <li><a href="#">Stars </a></li>
        <li><a href="#">Star rating and price</a></li>
        <li><a href="#">Distance from city centre </a></li>
        <li><a href="#"></a></li>
      </ul>
    </div>
  </div>
</template>
<script></script>
<style lang="scss">
@import "../assets/scss/booking/booking.scss";
.properties-text {
  font-size: 15px;
  color: rgb(58, 56, 56);
  font-weight: bold;
}
.accommodation {
  font-size: 13px;
  color: $bg-text-orange;
  font-weight: bold;
}
.tab-list {
  font-size: 14px;
  border: 1px solid $tab-text;
  li {
    a {
      color: $tab-text;
      text-decoration:none;
      margin: 10px;
      border-right: 1px solid $tab-text;
    }
  }
}
</style>
