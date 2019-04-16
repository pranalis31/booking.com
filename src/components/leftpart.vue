<template>
  <b-row>
    <div class="reserve-place px-3">
      <font-awesome-icon
        class="text-primary mr-1 mt-3"
        :icon="['fas', 'eye']"
      /><span class="small text-mute"
        >1,375 peoples are currently looking
        <div class="ml-4">for a place in madrid</div></span
      >
    </div>

    <div class="mt-3 mb-3">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15085.89263906098!2d72.85745569999999!3d19.042923249999998!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1554814434759!5m2!1sen!2sin"
        width="289"
        height="150"
        frameborder="0"
        style="border:0"
        allowfullscreen
      ></iframe>
      <div class="map-position">
        <span class="px-2 "
          ><font-awesome-icon
            class="text-primary size-icon mr-1 mt-1"
            :icon="['fas', 'map-marker-alt']"
        /></span>
        <div class="reserve border-inset">
          <button class="btn-reserve mt-0 font-weight-bold small shadow-inset">
            Show on map
          </button>
        </div>
      </div>
    </div>

    <div class="reserve-air pt-2 margin-set px-2 text-left">
      <span class="font-weight-bold text-dark ">
        How to get Vincci Centrium from Adlofo Suaraz Madrid Banaras Airport
      </span>
    </div>
    <div class="border border-bottom airport-box text-left">
      <div class="py-1 border-bottom">
        <span class="pb-2  px-2 small"
          ><font-awesome-icon
            class="text-dark mr-1 mt-1"
            :icon="['fas', 'car']"
          />Taxi</span
        >
        <span class="mx-5 text-dark bg-20 small">20 minutes</span>
      </div>
      <div class="py-2">
        <span class="px-2 small"
          ><font-awesome-icon
            class="text-dark mr-1 mt-1"
            :icon="['fas', 'parking']"
          />Parking available</span
        >
      </div>
      <div class="py-2">
        <span class="px-5 small text-secondary border-bottom">
          15% off all car rentals
        </span>
      </div>
    </div>

    <div class="reserve1 mt-2 pt-2 px-1">
      <span class="small italics font-weight-bold text-dark">
        Like this anyone but not sure yet?
      </span>
      <b-button variant="outline-primary" class="px-5 mt-2 font-weight-bold"
        >show similar hotels</b-button
      >
    </div>

    <div class="small font-weight-bold text-dark my-2">
      What guest loved the most:
    </div>
  </b-row>
</template>

<style lang="scss" scoped>
@import "../assets/scss/booking/booking.scss";
.reserve-place {
  width: 286px;
  height: 66px;
  background-color: $navtext;
  text-align: left;
}
.btn-reserve {
  border: 3px solid $white-color;
  padding: 5px 50px;
  background-color: $btn-blue;
  color: $white-color;
}
.reserve-air {
  width: 286px;
  height: 70px;
  line-height: 1.2;
  background-color: $navtext;
}
.reserve1 {
  width: 286px;
  height: 90px;
  background-color: $navtext;
  border-radius: 3px;
}
.airport-box {
  width: 286px;
  height: auto;
  margin-top: -10px;
}
.map-position {
  position: relative;
  top: -114px;
}
.margin-set {
  margin-top: -80px;
}
.size-icon {
  font-size: 25px;
}
.btn-reserve {
  border: 3px solid $white-color;
  padding: 5px 50px;
}
.bg-20 {
  float: right;
  background-color: $navtext;
  margin-top: 3px;
}
</style>
