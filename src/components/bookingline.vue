<template>
  <div class="text text-left small mt-3 top-gude  font-weight-bold">
    <span class="star-circle"
      ><font-awesome-icon class="star1 text mr-1" :icon="['fas', 'star']" />
    </span>
    One of our Top guide in Madrid
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/booking/booking.scss";

.top-guide {
  color: $color-brown;
}
.star-circle {
  width: 15px;
  height: 15px;
  border: 1px solid $orange;
  border-radius: 50%;
  padding: 1px;
  background-color: $orange;
}
.star1 {
  color: $white-color;
  margin: 2px;
  font-size: 9px;
}
</style>
