<template>
  <div class="facilities text-left mt-3 ml-2">
    <span class=" text-dark font-weight-bold small"
      >Most popular facilities</span
    >

    <div class="small facility-color mb-2 mt-3">
      <span class="mr-1  font-weight-bold">
        <font-awesome-icon
          class=" mr-1"
          :icon="['fas', 'check-circle']"
        />Parking</span
      >
      <span class="mr-1  font-weight-bold">
        <font-awesome-icon class=" mr-1" :icon="['fas', 'check-circle']" />Non
        Smoking Rooms</span
      >
      <span class="mr-1  font-weight-bold">
        <font-awesome-icon class=" mr-1" :icon="['fas', 'check-circle']" />Room
        Service</span
      >
    </div>
    <div class="small facility-color mb-2">
      <span class="mr-1  font-weight-bold">
        <font-awesome-icon
          class=" mr-1 "
          :icon="['fas', 'check-circle']"
        />Facilities for disabled guests</span
      >
      <span class="mr-1  font-weight-bold">
        <font-awesome-icon
          class=" mr-1"
          :icon="['fas', 'check-circle']"
        />Restaurants</span
      >
      <span class="mr-1  font-weight-bold">
        <font-awesome-icon class=" mr-1" :icon="['fas', 'check-circle']" />Free
        Wifi</span
      >
      <span class="mr-1  font-weight-bold">
        <font-awesome-icon
          class=" mr-1"
          :icon="['fas', 'check-circle']"
        />Bars</span
      >
    </div>
    <div class="small facility-color mb-2">
      <span class="mr-1  font-weight-bold">
        <font-awesome-icon class=" mr-1" :icon="['fas', 'check-circle']" />Very
        good breakfast</span
      >
    </div>
    <div class="small facility-color mb-2">
      <span class="mr-1  font-weight-bold">
        Good for couples: they rate the facilities 8.2f0r two days.
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/scss/booking/booking.scss";

.facility-color {
  color: $bg-text-green;
}
</style>
