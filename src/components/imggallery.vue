<template>
  <b-row class="ml-1">
    <!-- swiper -->
    <swiper :options="swiperOption">
      <swiper-slide v-for="image in images" v-bind:key="image.index">
        <div class="img-color pt-2  px-5 ">
          <b-img :src="image.img" class="size-img" alt="img1" />
        </div>
      </swiper-slide>

      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

    <div class="" v-for="image1 in imagesmall" v-bind:key="image1.index">
      <b-img :src="image1.img" class="small-img mr-1 pt-1 pb-0" alt="img" />
    </div>
  </b-row>
</template>

<script>
import img1 from "../assets/images/room.jpg";
import img2 from "../assets/images/room-sm.jpg";
import img3 from "../assets/images/bed.jpg";

export default {
  data() {
    return {
      images: [
        {
          img: img1
        },
        {
          img: img3
        },
        {
          img: img1
        },
        {
          img: img3
        }
      ],
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      imagesmall: [
        {
          img: img1
        },
        {
          img: img2
        },
        {
          img: img1
        },
        {
          img: img2
        },
        {
          img: img1
        },
        {
          img: img2
        },
        {
          img: img1
        },
        {
          img: img2
        },
        {
          img: img1
        },
        {
          img: img1
        },
        {
          img: img2
        },
        {
          img: img1
        },
        {
          img: img2
        },
        {
          img: img2
        },
        {
          img: img1
        },
        {
          img: img2
        },
        {
          img: img1
        },
        {
          img: img1
        },
        {
          img: img2
        },
        {
          img: img1
        },
        {
          img: img2
        },
        {
          img: img1
        },
        {
          img: img2
        },
        {
          img: img2
        },
        {
          img: img2
        },
        {
          img: img1
        },
        {
          img: img2
        },
        {
          img: img1
        },
        {
          img: img2
        },
        {
          img: img2
        },
        {
          img: img2
        },
        {
          img: img2
        },
        {
          img: img1
        },
        {
          img: img2
        },
        {
          img: img1
        },
        {
          img: img2
        },
        {
          img: img1
        },
        {
          img: img1
        },
        {
          img: img2
        },
        {
          img: img1
        },
        {
          img: img2
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../assets/scss/booking/booking.scss";
.img-color {
  width: 800px;
  background-color: $navtext;
}
.size-img {
  width: 650px;
}
.small-img {
  width: 43px;
  height: 42px;
}
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  right: 64px !important;
  left: auto;
}
.swiper-button-prev,
.swiper-button-next {
  top: 80% !important;
  width: 15px !important;
  height: 15px !important;
  background-size: 12px 12px !important;
  background-color: $white-color;
  padding: 12px;
  border-radius: 50%;
  border: 1px solid $grey-color;
}
</style>
