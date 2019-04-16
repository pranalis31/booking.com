<template>
  <b-row>
    <b-col md="9" class="mt-2 text-left">
      <b-badge class="text-light hotelsmall ">Hotel</b-badge>
      <span class="vincci-heading mr-1"> Vincci Centrium</span>
      <span class="star">
        <font-awesome-icon class="text-warning " :icon="['fas', 'star']" />
        <font-awesome-icon class="text-warning" :icon="['fas', 'star']" />
        <font-awesome-icon class="text-warning " :icon="['fas', 'star']" />
        <font-awesome-icon class="text-warning  mr-2" :icon="['fas', 'star']" />
      </span>
      <span class="bg-warning pad-icon-size mt-0 mr-3">
        <font-awesome-icon
          class="text-light hand-pt-size"
          :icon="['fas', 'hand-point-right']"
        />
      </span>
      <span class="ml-2">
        <span class="small color-person-bg">
          <span class=" person-icon  mt-0">
            <font-awesome-icon class="text-dark " :icon="['fas', 'female']" />
            <font-awesome-icon class="text-dark " :icon="['fas', 'female']" />
          </span>
          Great for two travellers</span
        ></span
      >
      <div class="small mt-1">
        <font-awesome-icon
          class="text-primary  mr-2"
          :icon="['fas', 'map-marker-alt']"
        />Cedaceros, 4 , Centro,24814 Madrid,Spain-
        <span class="small text-primary font-weight-bold"
          ><a href="#">Excellent Location - Show Map </a></span
        >
      </div>
      <div class="text small font-weight-bold mb-2">
        <font-awesome-icon class="text mr-2 mt-2" :icon="['fas', 'car']" /> Book
        accomodation in Madrid and get 15% off all car rentals
      </div>
    </b-col>
    <b-col md="3">
      <div class="match-float">
        <span>
          <font-awesome-icon
            class="text-primary size  mt-2"
            :icon="['far', 'heart']"
        /></span>
        <span>
          <font-awesome-icon
            class="text-primary size ml-2 mt-2"
            :icon="['fas', 'share-alt']"
        /></span>
        <button class="small bt-bg text-light mt-1 px-2 ml-2 font-weight-bold">
          Reserve
        </button>
        <div class="small italice font-weight-bold">
          <font-awesome-icon
            class="text-primary  mr-1  mt-2"
            :icon="['fas', 'check-circle']"
          /><i>We Price Match</i>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<style lang="scss">
@import "../assets/scss/booking/booking.scss";
.hotel {
  padding: 3px 7px;
}
.vincci-heading {
  font-size: 20px;
  font-weight: bold;
}
.star {
  font-size: 10px;
}
.text {
  color: $orange;
}
.size {
  font-size: 20px;
}
.hand-pt-size {
  font-size: 10px;
}
.pad-icon-size {
  padding: 1px 5px;
}
.person-icon {
  padding: 0.3rem;
  width: 50px;
  height: 50px;
  border: 1px solid $doger-blue;
  border-radius: 50%;
  font-size: 11px;
  margin-left: -17px;
  /* padding-left: 12px; */
  z-index: 1;
  background-color: $white-color;
}

.color-person-bg {
  background-color: $navtext;
  padding: 0.4rem;
  border-radius: 2px;
}
.match-float {
  float: right;
}
</style>
