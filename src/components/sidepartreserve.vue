<template>
  <b-row>
    <div class="reserve pb-4 mb-2">
      <button class="btn-reserve font-weight-bold small shadow">Reserve</button>
    </div>
    <div class="reserve1">
      <span class="small italics font-weight-bold text-dark">
        <font-awesome-icon
          class="text-primary mr-1 mt-3"
          :icon="['fas', 'check-circle']"
        /><i>We price match</i></span
      >
    </div>
  </b-row>
</template>

<style lang="scss" scoped>
@import "../assets/scss/booking/booking.scss";

.reserve {
  width: 286px;
  height: 58px;
  background-color: $navtext;
}
.reserve1 {
  width: 286px;
  height: 48px;
  background-color: $navtext;
}
.btn-reserve {
  background-color: $btn-blue;
  padding: 6px 79px;
  margin: 12px 15px;
  border: none;
  border-radius: 3px;
  color: $white-color;
}
</style>
