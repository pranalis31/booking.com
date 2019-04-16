<template>
  <div>
    <div class="footer-top">
      <div class="text-center p-5">
        <div class="text-light top-part-footer">Save Time , Save Money</div>
        <div class="text-light small margin-spacing">
          Sign up and we will send the best deals to you
        </div>
        <b-row>
          <b-col md="4" class=" mt-2 input-margin">
            <b-form-input
              v-model="text"
              placeholder="Your email"
            ></b-form-input>
            <!-- <b-form-checkbox class="small check-size text-left text-light mt-2"
                 id="checkbox-2"
                 v-model="status"
                  name="checkbox-a"
                  value="accepted"
                  unchecked-value="not_accepted"
                   >
                  send me a link to booking.com for accepting the link
               </b-form-checkbox> -->
            <div class="text-left mt-1">
              <input
                type="checkbox"
                name=""
                id="footercheckbox"
                class=" mr-2"
              />
              <label
                for="footercheckbox"
                class="small text-left text-light mt-1"
              >
                Send me a link to booking.com for accepting the link</label
              >
            </div>
          </b-col>
          <b-col md="1">
            <button class="subscribe-btn">Subscribe</button>
          </b-col>
        </b-row>
      </div>
    </div>
    <div class="footer-middle">
      <div class="text-center">
        <b-button variant="outline-light" size="sm" class=" mt-4 text-light "
          >List Your property</b-button
        >
      </div>
      <div class="list mt-4 mb-1">
        <span
          ><a
            class="text-light small font-weight-bold border-bottom mr-3"
            href=""
            >Table Version</a
          ></span
        >
        <span
          ><a
            class="text-light small font-weight-bold border-bottom mr-3"
            href=""
            >Mobile Version</a
          ></span
        >
        <span
          ><a
            class="text-light small font-weight-bold border-bottom mr-3"
            href=""
            >Your Account</a
          ></span
        >
        <span
          ><a
            class="text-light small font-weight-bold border-bottom mr-3"
            href=""
            >Make changes to your booking online</a
          ></span
        >
        <span
          ><a
            class="text-light small font-weight-bold border-bottom mr-3"
            href=""
            >Customer service help</a
          ></span
        >
        <span
          ><a
            class="text-light small font-weight-bold border-bottom mr-3"
            href=""
            >Resume on offline</a
          ></span
        >
        <span
          ><a
            class="text-light small font-weight-bold border-bottom mr-3"
            href=""
            >Booking.com for bussiness</a
          ></span
        >
      </div>
    </div>
    <div class="footer-links m-3">
      <b-container>
        <b-row>
          <b-col md="2">
            <div class="column text-left small">
              <ul>
                <li><a href="#">Countries</a></li>
                <li><a href="#">Region</a></li>
                <li><a href="#">Cities</a></li>
                <li><a href="#">District</a></li>
                <li><a href="#">Airport</a></li>
                <li><a href="#">Hotels</a></li>
                <li><a href="#">Places of interest</a></li>
              </ul>
            </div>
          </b-col>
          <b-col md="2">
            <div class="column text-left small">
              <ul>
                <li><a href="#">Holiday/rentals</a></li>
                <li><a href="#">Apartments</a></li>
                <li><a href="#">Resort</a></li>
                <li><a href="#">Villas</a></li>
                <li><a href="#">Hostels</a></li>
                <li><a href="#">Beds</a></li>
                <li><a href="#">Guest houses</a></li>
              </ul>
            </div>
          </b-col>
          <b-col md="3">
            <div class="column text-left small">
              <ul>
                <li><a href="#">Unique place to stay</a></li>
                <li><a href="#">Reviews</a></li>
                <li><a href="#">Unpacked Travel articles</a></li>
                <li>
                  <a href="#"
                    >Travel Communities
                    <b-badge class="text-light bg-success hotelsmall "
                      >new</b-badge
                    ></a
                  >
                </li>
              </ul>
            </div>
          </b-col>
          <b-col md="2">
            <div class="column text-left small">
              <ul>
                <li><a href="#">Car hire</a></li>
                <li><a href="#">Flight Finder</a></li>
                <li><a href="#">Restaurant resevation</a></li>
                <li><a href="#">Booking.com for Travel Agent</a></li>
              </ul>
            </div>
          </b-col>
          <b-col md="2">
            <div class="column text-left small">
              <ul>
                <li><a href="#">About booking.com</a></li>
                <li><a href="#">Give website feedback</a></li>
                <li><a href="#">Customer Service help</a></li>
                <li><a href="#">Partners help</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press Center</a></li>
                <li><a href="#">Investigator relation</a></li>
                <li><a href="#">Investigator relation</a></li>
                <li><a href="#">Term and Conditions</a></li>
                <li><a href="#">Privacy and Cookie Statement</a></li>
                <li><a href="#">Corporate contact</a></li>
              </ul>
            </div>
          </b-col>
          <b-col md="12">
            <div class="text-left">
              <span class="small text-secondary"
                >Booking.com B.V is based in Amsterdam in the netherlands and is
                internationally supported by
                <span class="small font-weight-bold text-primary">
                  198 offices in 70 countries</span
                ></span
              >
            </div>
            <div class="my-3">
              <span class="text-primary font-weight-bold  small"
                ><a href="">Extranel Login</a></span
              >
            </div>
            <div class="copyright text-left">
              <span class="small text-secondary"
                >Copyright &copy; 1996-2019 Booking.com<sup>TM</sup> All right
                reserved</span
              >
            </div>
            <div class="my-3">
              <span class="small text-secondary">
                Booking.com is a part of Booking Holding Inc,the world leader is
                online travel and related services</span
              >
            </div>
            <div class="my-3">
              <span class="mr-4">
                <b-img
                  :src="imglogo"
                  class=" logo-size mr-1 pt-1 pb-0"
                  alt="img"
                />
              </span>
              <span class="mr-4">
                <b-img
                  :src="imglogo1"
                  class=" logo-size mr-1 pt-1 pb-0"
                  alt="img"
                />
              </span>
              <span class="mr-4">
                <b-img
                  :src="imglogo2"
                  class=" logo-size mr-1 pt-1 pb-0"
                  alt="img"
                />
              </span>
              <span class="mr-4">
                <b-img
                  :src="imglogo3"
                  class=" logo-size mr-1 pt-1 pb-0"
                  alt="img"
                />
              </span>
              <span class="mr-4">
                <b-img
                  :src="imglogo4"
                  class="logo-size  mr-1 pt-1 pb-0"
                  alt="img"
              /></span>
              <span class="mr-4">
                <b-img
                  :src="imglogo5"
                  class="logo-size  mr-1 pt-1 pb-0"
                  alt="img"
              /></span>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import img from "../assets/images/logo-footer.png";
import img1 from "../assets/images/logo-footer1.png";
import img2 from "../assets/images/kayak-logo.png";
import img3 from "../assets/images/Agoda_logo.png";
import img4 from "../assets/images/rent.png";
import img5 from "../assets/images/open.png";

export default {
  data() {
    return {
      imglogo: img,
      imglogo1: img1,
      imglogo2: img2,
      imglogo3: img3,
      imglogo4: img4,
      imglogo5: img5
    };
  }
};
</script>

<style lang="scss">
@import "../assets/scss/booking/booking.scss";
.margin-spacing {
  margin-bottom: 0.7rem;
  margin-top: 0;
}
.column {
  ul {
    li {
      margin: 3px 0;
    }
  }
}
.btn-sm,
.btn-group-sm > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 11px !important;
  line-height: 1.5;
  border-radius: 0.2rem;
}
.footer-top {
  width: 100%;
  height: 230px;
  background-color: $footer-bg;
}
.chesk-size {
  width: 20px;
  height: 20px;
}
.logo-size {
  width: 100px;
  height: auto;
}

.input-margin {
  margin-left: 271px;
}
.footer-middle {
  width: 100%;
  height: 120px;
  background-color: $head-top-hover;
}
.top-part-footer {
  font-size: 20px;
}
.subscribe-btn {
  background-color: $btn-blue;
  padding: 8px 41px;
  margin-top: 6px;
  margin-left: -24px;
  border: none;
  color: $white-color;
  border-radius: 3px;
}
.column ul li {
  list-style-type: none;
}
</style>
