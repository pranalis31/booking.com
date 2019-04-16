<template>
  <b-row>
    <div class="ml-4">
      <div class="viniccihotels mt-4 pb-2 mb-2">
        <button class="btn-viniccihotels">vinccihotels</button>
      </div>

      <div class="guest-love text-left p-3">
        <span class="">Guests Love...</span>

        <div v-for="image in images" v-bind:key="image.index">
          <b-row>
            <b-col md="1">
              <div class="mt-2 text-left">
                <font-awesome-icon
                  class=" mr-1 "
                  :icon="['fas', 'check-circle']"
                />
              </div>
            </b-col>
            <b-col md="10" class="text-left mt-2 small">
              <span class="text-dark font-weight-bold"
                >&#34;{{ image.title }}&#34;</span
              >
              <div>{{ image.subtitle }}</div>
            </b-col>
          </b-row>
        </div>

        <span class="small">Perfect for a-2 night stay!</span>

        <div v-for="content in contentsection" v-bind:key="content.index">
          <b-row>
            <b-col md="1">
              <div class="mt-2 text-left">
                <figure>
                  <b-img :src="content.img" class="img-size" alt="img1" />
                </figure>
              </div>
            </b-col>
            <b-col md="10" class="text-left mt-2 small">
              <span class="text-dark">{{ content.paragraph }}</span>
            </b-col>
          </b-row>
        </div>
        <span class="small font-weight-bold">Breakfast info</span>
        <div class="small">Buffer</div>
        <div class="small font-weight-bold">
          Very Good <span class="text-secondary">coffee</span>
        </div>
        <div v-for="room in rooms" v-bind:key="room.index">
          <b-row>
            <b-col md="1">
              <div class="mt-2 text-left">
                <font-awesome-icon
                  class=" mr-1 "
                  :icon="['fas', 'check-circle']"
                />
              </div>
            </b-col>
            <b-col md="10" class="text-left mt-2 small">
              <span class="text-secondary">{{ room.title }}</span>
            </b-col>
          </b-row>
        </div>
        <b-row>
          <b-col md="1">
            <div class="mt-2 text-left">
              <font-awesome-icon class=" ml-1" :icon="['fas', 'wifi']" />
            </div>
          </b-col>
          <b-col md="10">
            <div class="text-left mt-2 px-2 py-1 small bg-wifi">
              <span class=" text-light  font-weight-bold"
                >Free Wifi<br />Guests consistency rate the<br />wifi is
                Excellent</span
              >
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="1">
            <div class="mt-2 text-left">
              <font-awesome-icon class=" ml-1" :icon="['fas', 'lock']" />
            </div>
          </b-col>
          <b-col md="10">
            <div class="text-left mt-2  small ">
              <span class=" text-secondary border-bottom"
                >Great Area for Shopping</span
              >
            </div>
          </b-col>
        </b-row>
        <b-row>
          <div class="reserve ml-4 mt-2">
            <button class="btn-reserve font-weight-bold small shadow">
              Reserve
            </button>
          </div>
        </b-row>
      </div>
    </div>
    <div class="side-image ml-4 mt-3">
      <div class="  pt-5 font-weight-bold text-light">
        Save and Explore
      </div>
      <div class="smallfont-weight-bold text-light">
        Book a Stay in Madrid and unlock
      </div>
      <div class="small font-weight-bold text-light">
        15% off all car rentals
      </div>
    </div>
  </b-row>
</template>

<script>
import img1 from "../assets/images/img.jpeg";
// import img2 from "../assets/images//roomview.jpeg";

export default {
  data() {
    return {
      // sideimage:img2,
      images: [
        {
          title: "friendly staff",
          subtitle: "63 related review "
        },
        {
          title: "excellent location",
          subtitle: "35 related review"
        },
        {
          title: "clean room",
          subtitle: "32 related review"
        },
        {
          title: "boutique style"
        }
      ],
      contentsection: [
        {
          img: img1,
          paragraph:
            "Lorem Ipsum passages and more recently PageMaker including version It has survived not only five centuries"
        },
        {
          img: img1,
          paragraph:
            "Lorem Ipsum passages and more recently PageMaker including version It has survived not only five centuries"
        }
      ],
      rooms: [
        {
          title: "Balcony with view"
        },
        {
          title: "Balcony City view"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/booking/booking.scss";
.bg-wifi {
  background-color: $bg-text-green !important;
  font-size: 12px;
}
.btn-reserve {
  background-color: $btn-blue;
  padding: 6px 91px;
  border: 1px solid $white-color outset;
  color: $white-color;
  margin: 0 auto;
}
.viniccihotels {
  width: 284px;
  height: 90px;
  border: 1px solid $navtext;
}

.btn-viniccihotels {
  background-color: $black;
  padding: 16px 36px;
  margin: 17px 15px;
  border: none;
  color: $white-color;
}
.guest-love {
  background-color: $navtext;
  width: 284px;
  height: auto;
}
.img-size {
  width: 15px;
  height: 15px;
  border-radius: 50%;
}
.side-image {
  background: linear-gradient(
      to bottom rgba(0, 0, 0, 0.9),
      rgba(25, 23, 23, 0.4)
    ),
    url("../assets/images//roomview.jpeg") no-repeat;
  width: 272px;
  height: 191px;
}
</style>
