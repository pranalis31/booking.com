<template>
  <!-- created by roshan -->
  <div>
    <div class="mt-3">
      <b-card class="text-center">
        <div class="">
          <b-row>
            <b-col md="4">
              <figure>
                <div>
                  <b-img :src="hotel1" class=""></b-img>
                </div></figure
            ></b-col>
            <b-col md="8">
              <div class="d-flex">
                <div class="p-2">Vincci Centrum</div>
                <div class="p-2">Flex item 2</div>
                <div class="p-2">Flex item 3</div>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-card>
    </div>
  </div>
</template>
<script>
import images1 from "../assets/images/hotel-img-1.jpeg";
export default {
  data() {
    return {
      hotel1: images1
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/booking/booking.scss";
</style>
