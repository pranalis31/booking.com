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
      <ul class="nav tab-list  nav-pills">
        <li class="nav-item tab-items">
          <a class="nav-link tab-links active " href="#">Our top picks </a>
        </li>

        <li class="nav-item tab-items">
          <a class="nav-link tab-links" href="#">Price (lowest first)</a>
        </li>
        <li class="nav-item tab-items">
          <a class="nav-link tab-links" href="#"
            >Stars
            <span
              ><font-awesome-icon
                :icon="['fas', 'sort-down']"
                class="arrow-down"
            /></span>
          </a>
        </li>
        <li class="nav-item tab-items">
          <a class="nav-link tab-links" href="#">Star rating and price</a>
        </li>
        <li class="nav-item tab-items">
          <a class="nav-link tab-links" href="#">Distance from city centre</a>
        </li>
        <li class="nav-item tab-items">
          <a class="nav-link tab-links fonte" href="#"
            ><font-awesome-icon :icon="['fas', 'ellipsis-h']"
          /></a>
        </li>
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
  font-size: 13px;
  margin-top: 10px;

  .tab-items {
    border-right: 1px solid $tab-text;
    border-bottom: 1px solid $tab-text;
    // border: 1px solid $tab-text;
    border-top: 5px solid $tab-text !important;

    .tab-links {
      text-decoration: none;
      border-radius: 0px !important;
      padding: 4px 26px !important;
    }
    .fonte {
      color: black;
    }
    .arrow-down {
      margin-bottom: 2px;
      color: orange;
    }
  }
}

.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: green !important;
}
</style>
