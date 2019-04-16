<template>
  <b-row>
    <div
      class="mt-3 text-left small"
      v-for="image in images"
      v-bind:key="image.index"
    >
      <span class="text-dark text-left"> &#34;{{ image.heading }}&#34; </span>
      <b-row>
        <b-col md="2">
          <div class="img-display mt-3 text-left">
            <figure>
              <b-img :src="image.img" class="img-size" alt="img1" />
            </figure>
          </div>
        </b-col>
        <b-col md="10" class="text-left mt-3 pl-0">
          <span class="text-dark font-weight-bold">{{ image.title }}</span>
          <div>
            <b-img :src="image.imgicon" class="img-size12" alt="img1" />

            {{ image.subtitle }}
          </div>
        </b-col>
      </b-row>
    </div>
  </b-row>
</template>

<script>
import img1 from "../assets/images/img.jpeg";
import img2 from "../assets/images/iconflag.png";

export default {
  data() {
    return {
      images: [
        {
          heading:
            "Excellent location.Staff were helpful Room was good and very silent",
          img: img1,
          title: "Prazian",
          imgicon: img2,
          subtitle: "Denmark"
        },
        {
          heading:
            "Breakfast was good but could have replenished a little quicker ie coffeee machine ran out of water every morning.Location was great just of Sol Plaza area.",
          img: img1,
          title: "Lyan",
          imgicon: img2,
          subtitle: "Denmark"
        },
        {
          heading:
            "Excellent location Staff were helpful Room was good and very peaceful as well as site seeing looks pretty",
          img: img1,
          title: "Richard",
          imgicon: img2,
          subtitle: "United Kingdom"
        },
        {
          heading:
            "Excellent location Staff were helpful Room was good and very peaceful as well as site seeing looks pretty",
          img: img1,
          title: "Ben",
          imgicon: img2,
          subtitle: "United Kingdom"
        },
        {
          heading:
            "Excellent location Staff were helpful Room was good and very peaceful as well as site seeing looks pretty",
          img: img1,
          title: "Prazian",
          imgicon: img2,
          subtitle: "United Kingdom"
        },
        {
          heading:
            "Excellent location Staff were helpful Room was good and very peaceful as well as site seeing looks pretty",
          img: img1,
          title: "Harald",
          imgicon: img2,
          subtitle: "Norway"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.img-size {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.img-size12 {
  height: 15px;
}
</style>
