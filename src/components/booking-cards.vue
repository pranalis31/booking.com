<template>
  <!-- created by roshan -->
  <div>
    <div v-for="card in cards" v-bind:key="card.index">
      <div class="mt-3">
        <b-card class="text-center">
          <div class="">
            <b-row>
              <b-col md="3">
                <figure>
                  <div>
                    <b-img :src="card.hotel1" class="hotel-img"></b-img>
                  </div></figure
              ></b-col>
              <b-col md="9">
                <div class="ml-3">
                  <div class="d-flex justify-content-beetween">
                    <!-- flex 1st col -->
                    <div class="text-left">
                      <div class="card-main-title">
                        {{ card.heading }}
                        <span>
                          <font-awesome-icon
                            class="small star-icon"
                            :icon="['fas', 'star']"/></span
                        ><span>
                          <font-awesome-icon
                            class="small star-icon"
                            :icon="['fas', 'star']"/></span
                        ><span>
                          <font-awesome-icon
                            class="small star-icon"
                            :icon="['fas', 'star']"
                        /></span>
                        <span>
                          <font-awesome-icon
                            class="small star-icon"
                            :icon="['fas', 'star']"
                        /></span>

                        <span>
                          <font-awesome-icon
                            class="small like-icon"
                            :icon="['fas', 'thumbs-up']"
                        /></span>
                      </div>
                      <!-- ------- -->
                      <div class="text-left card-para">
                        <span>
                          <font-awesome-icon
                            class="location-icon"
                            :icon="['fas', 'map-marker-alt']"/></span
                        ><span class="centro-text">
                          {{ card.paraleft1 }}
                        </span>
                        <span>
                          <font-awesome-icon
                            class="direction-icon"
                            :icon="['fas', 'directions']"/></span
                        ><span class="metro-text"> {{ card.paraleft2 }}</span
                        >-
                        <span class="metro-text"> {{ card.paraleft3 }}</span>
                      </div>
                      <!-- --- -->
                      <div>
                        <div class="card-para mt-2">
                          {{ card.paraleft4 }}
                        </div>
                      </div>
                      <!-- ------ -->
                      <div>
                        <div class="demand-text">
                          <span class="bg-demand"> {{ card.paraleft5 }}</span>
                          <span class="demand-para"> {{ card.paraleft6 }}</span>
                        </div>
                      </div>
                      <!-- ---- -->
                      <div class="room-text">
                        {{ card.paraleft7 }}
                        <span>
                          <font-awesome-icon
                            class="user-icon"
                            :icon="['fas', 'user']"
                        /></span>
                        <span>
                          <font-awesome-icon
                            class="user-icon"
                            :icon="['fas', 'user']"
                        /></span>
                      </div>
                      <!--  -->
                      <div class="high-text">
                        {{ card.paraleft8 }}
                      </div>
                      <!--  -->
                      <div class="risk-text">
                                 {{ card.paraleft9 }}
                      </div>
                    </div>
                    <!-- flex 2nd col -->
                    <div class="ml-auto">
                      <div class="d-flex fab-dflex">
                        <div>
                          <div class="fab-text">          {{ card.pararight1 }}</div>
                          <div class="review-text"> {{ card.pararight2 }}</div>
                        </div>
                        <div class="rate-in-no"> {{ card.pararight3 }}</div>
                      </div>
                      <!-- --------- -->
                      <div class="loc-text"> {{ card.pararight4 }}</div>
                      <!--  -->
                      <div class="price-text"> {{ card.pararight5 }}</div>
                      <!--  -->
                      <div class="price-no">
                        <span>
                          <font-awesome-icon
                            class="user-icon"
                            :icon="['fas', 'rupee-sign']"
                        /></span>
                       {{ card.pararight6 }}
                      </div>
                      <!--  -->
                      <div class="tax-text"> {{ card.pararight7 }}</div>
                      <div class="cancellation-text">
                         {{ card.pararight8 }}
                        <div class="cancellation-text"> {{ card.pararight9 }}</div>
                        <div class="cancellation-text">
                         {{ card.pararight10 }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="text-right b-outlinbe">
                    <b-button class="room-btn"
                      > {{ card.pararight11 }}
                      <span>
                        <font-awesome-icon
                          :icon="['fas', 'chevron-right']"/></span
                    ></b-button>
                  </div>
                </div>
              </b-col>
            </b-row>
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
import images1 from "../assets/images/hotel-img-1.jpeg";
export default {
  data() {
    return {
      cards: [
        {
          hotel1: images1,
          heading: "   Vincci Centrum",
          paraleft1: "Centro, Madrid- Show on map",
          paraleft2: "(450 m from centre)",
          paraleft3: "Metro access",
          paraleft4:
            " 5 other people loocked for your dates in the last 10 minutes",
          paraleft5: "In high demand!",
          paraleft6: " Booked 5 times for your dates in the last 24 hours",
          paraleft7: "   Double or Twin Room -",
          paraleft8: "   In high demand",
          paraleft9:
            "    Risk free: u can cancel later, so look in this great price",

          pararight1: "Fabulous",
          pararight2: "2,462 reviews",
          pararight3: "8.6",
          pararight4: "Location 9.4",
          pararight5: "Price for 2 night",
          pararight6: " 20,786",
          pararight7: " taxes and charges included",
          pararight8: " FREE cancellation ",
          pararight9: " No payment needed ",
          pararight10: " 15% off all car rentals",
          pararight11: "See our last available rooms"
        },
              {
          hotel1: images1,
          heading: "   Vincci Centrum",
          paraleft1: "Centro, Madrid- Show on map",
          paraleft2: "(450 m from centre)",
          paraleft3: "Metro access",
          paraleft4:
            " 5 other people loocked for your dates in the last 10 minutes",
          paraleft5: "In high demand!",
          paraleft6: " Booked 5 times for your dates in the last 24 hours",
          paraleft7: "   Double or Twin Room -",
          paraleft8: "   In high demand",
          paraleft9:
            "    Risk free: u can cancel later, so look in this great price",

          pararight1: "Fabulous",
          pararight2: "2,462 reviews",
          pararight3: "8.6",
          pararight4: "Location 9.4",
          pararight5: "Price for 2 night",
          pararight6: " 20,786",
          pararight7: " taxes and charges included",
          pararight8: " FREE cancellation ",
          pararight9: " No payment needed ",
          pararight10: " 15% off all car rentals",
          pararight11: "See our last available rooms"
        },
              {
          hotel1: images1,
          heading: "   Vincci Centrum",
          paraleft1: "Centro, Madrid- Show on map",
          paraleft2: "(450 m from centre)",
          paraleft3: "Metro access",
          paraleft4:
            " 5 other people loocked for your dates in the last 10 minutes",
          paraleft5: "In high demand!",
          paraleft6: " Booked 5 times for your dates in the last 24 hours",
          paraleft7: "   Double or Twin Room -",
          paraleft8: "   In high demand",
          paraleft9:
            "    Risk free: u can cancel later, so look in this great price",

          pararight1: "Fabulous",
          pararight2: "2,462 reviews",
          pararight3: "8.6",
          pararight4: "Location 9.4",
          pararight5: "Price for 2 night",
          pararight6: " 20,786",
          pararight7: " taxes and charges included",
          pararight8: " FREE cancellation ",
          pararight9: " No payment needed ",
          pararight10: " 15% off all car rentals",
          pararight11: "See our last available rooms"
        },
              {
          hotel1: images1,
          heading: "   Vincci Centrum",
          paraleft1: "Centro, Madrid- Show on map",
          paraleft2: "(450 m from centre)",
          paraleft3: "Metro access",
          paraleft4:
            " 5 other people loocked for your dates in the last 10 minutes",
          paraleft5: "In high demand!",
          paraleft6: " Booked 5 times for your dates in the last 24 hours",
          paraleft7: "   Double or Twin Room -",
          paraleft8: "   In high demand",
          paraleft9:
            "    Risk free: u can cancel later, so look in this great price",

          pararight1: "Fabulous",
          pararight2: "2,462 reviews",
          pararight3: "8.6",
          pararight4: "Location 9.4",
          pararight5: "Price for 2 night",
          pararight6: " 20,786",
          pararight7: " taxes and charges included",
          pararight8: " FREE cancellation ",
          pararight9: " No payment needed ",
          pararight10: " 15% off all car rentals",
          pararight11: "See our last available rooms"
        },
              {
          hotel1: images1,
          heading: "   Vincci Centrum",
          paraleft1: "Centro, Madrid- Show on map",
          paraleft2: "(450 m from centre)",
          paraleft3: "Metro access",
          paraleft4:
            " 5 other people loocked for your dates in the last 10 minutes",
          paraleft5: "In high demand!",
          paraleft6: " Booked 5 times for your dates in the last 24 hours",
          paraleft7: "   Double or Twin Room -",
          paraleft8: "   In high demand",
          paraleft9:
            "    Risk free: u can cancel later, so look in this great price",

          pararight1: "Fabulous",
          pararight2: "2,462 reviews",
          pararight3: "8.6",
          pararight4: "Location 9.4",
          pararight5: "Price for 2 night",
          pararight6: " 20,786",
          pararight7: " taxes and charges included",
          pararight8: " FREE cancellation ",
          pararight9: " No payment needed ",
          pararight10: " 15% off all car rentals",
          pararight11: "See our last available rooms"
        },
              {
          hotel1: images1,
          heading: "   Vincci Centrum",
          paraleft1: "Centro, Madrid- Show on map",
          paraleft2: "(450 m from centre)",
          paraleft3: "Metro access",
          paraleft4:
            " 5 other people loocked for your dates in the last 10 minutes",
          paraleft5: "In high demand!",
          paraleft6: " Booked 5 times for your dates in the last 24 hours",
          paraleft7: "   Double or Twin Room -",
          paraleft8: "   In high demand",
          paraleft9:
            "    Risk free: u can cancel later, so look in this great price",

          pararight1: "Fabulous",
          pararight2: "2,462 reviews",
          pararight3: "8.6",
          pararight4: "Location 9.4",
          pararight5: "Price for 2 night",
          pararight6: " 20,786",
          pararight7: " taxes and charges included",
          pararight8: " FREE cancellation ",
          pararight9: " No payment needed ",
          pararight10: " 15% off all car rentals",
          pararight11: "See our last available rooms"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/booking/booking.scss";

.hotel-img {
  border-radius: 5px;
  width: 200px;
  height: 200px;
}
//******************flex col 1 style
.card-main-title {
  color: $btn-blue;
  font-weight: bold;
  font-size: 20px;

  .star-icon {
    font-size: 10px;
    color: $bg-form;
    margin-bottom: 2px;
  }
  .like-icon {
    font-size: 14px;
    background-color: $bg-form;
    margin-bottom: 2px;
    color: white;
    padding: 2px;
  }
}
// *****
.card-para {
  font-size: $para-font;
  .location-icon {
    color: rgb(36, 35, 35);
  }
  .centro-text {
    color: $btn-blue;
    font-weight: bold;
    border-bottom: 1px solid $btn-blue;
  }
  .metro-text {
    border-bottom: 1px dotted;
  }
}
// ***
.demand-text {
  font-size: $para-font;
  .bg-demand {
    background-color: red;
    color: white;
    padding: 2px;
    border-radius: 4px;
  }
  .demand-para {
    color: red;
  }
}
// ***
.room-text {
  font-weight: bold;
  font-size: $para-font;
  margin-top: 55px;
  .user-icon {
    font-size: 9px;
  }
}
// ******
.high-text {
  font-size: $para-font;
  color: red;
  font-weight: bold;
}
// *************
.risk-text {
  font-size: $para-font;
  color: green;
}
//******************flex col 2 style
.fab-dflex {
  margin-left: 45px;
  .fab-text {
    font-size: 15px;
    color: $table-header;
  }
  .review-text {
    font-size: 11px;
    line-height: 1;
  }
  .rate-in-no {
    font-size: 15px;
    margin-left: 3px;
    background-color: $table-header;
    color: white;
    padding: 5px;
    border-radius: 5px 5px 5px 0px;
  }
}
// ***********
.loc-text {
  font-size: $para-font;
  color: $btn-blue;
  font-weight: bold;
  text-align: right;
  margin-top: 3px;
}
.price-text {
  background-color: $table-header;
  color: white;
  font-size: $para-font;
  border-radius: 3px;
  padding: 2px;
  margin-top: 39px;
  text-align: right;
  margin-left: 56px;
  padding-right: 4px;
}
.price-no {
  color: $bg-text-green;
  font-size: 17px;
  font-weight: bold;
  text-align: right;
  margin-top: 5px;
  margin-bottom: 2px;
}
.tax-text {
  font-size: $para-font;
  text-align: right;
}
.cancellation-text {
  font-size: $para-font;
  color: $bg-text-green;
  font-weight: bold;
  text-align: right;
}
// ****************

.room-btn {
  background-color: $btn-blue;
  border-radius: 0px;
  color: white;
  margin-top: 8px;
  font-size: 14px;
  font-weight: bold;
}
</style>
