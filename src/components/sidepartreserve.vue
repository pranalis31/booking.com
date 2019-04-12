<template>
  <b-row>
    <div class="reserve pb-4 mb-2">
      <button class="btn-reserve">Reserve</button>
    </div>
    <div class="reserve1 pt-2">
      <span class="small italics font-weight-bold text-dark">
        <font-awesome-icon
          class="text-primary mr-3 mt-3"
          :icon="['fas', 'check-circle']"
        />We price match</span
      >
    </div>
  </b-row>
</template>

<style lang="scss" scoped>
@import "../assets/scss/booking/booking.scss";

.reserve {
  width: 286px;
  height: 90px;
  background-color: $navtext;
}
.reserve1 {
  width: 286px;
  height: 50px;
  background-color: $navtext;
}
.btn-reserve {
  background-color: #007cc1;
  padding: 6px 79px;
  margin: 28px 15px;
  border: none;
  color: #fff;
}
</style>
