import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueAwesomeSwiper from "vue-awesome-swiper";

// require styles
import "swiper/dist/css/swiper.css";

Vue.use(VueAwesomeSwiper);

// bootstrap install
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// foontawesome install
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faCaretDown,
  faTh,
  faDumbbell,
  faRupeeSign,
  faCheckCircle,
  faCar,
  faEllipsisH,
  faSortDown,
  faQuestionCircle,
  faStar,
  faThumbsUp,
  faMapMarkerAlt,
  faDirections,
  faUser,
  faChevronRight,
  faHandPointRight,
  faShareAlt,
  faWifi,
  faParking,
  faLock,
  faLaugh,
  faCalendar,
  faFemale,
  faEye,
  faBath,
  faTv,
  faAirFreshener,
  faCheck
} from "@fortawesome/free-solid-svg-icons"; //fas fa

import {
  faLinkedinIn,
  faFacebookSquare,
  faTwitter
} from "@fortawesome/free-brands-svg-icons"; //fab

import {
  faCommentAlt,
  faHeart,
  faClock
} from "@fortawesome/free-regular-svg-icons";

library.add(
  faCaretDown,
  faTh,
  faDumbbell,
  faRupeeSign,
  faCheckCircle,
  faCar,
  faEllipsisH,
  faSortDown,
  faQuestionCircle,
  faStar,
  faThumbsUp,
  faMapMarkerAlt,
  faDirections,
  faUser,
  faChevronRight,
  faHandPointRight,
  faShareAlt,
  faWifi,
  faParking,
  faLock,
  faLaugh,
  faQuestionCircle,
  faCalendar,
  faFemale,
  faEye,
  faBath,
  faTv,
  faCheck,
  faAirFreshener
); //fas

library.add(faLinkedinIn, faFacebookSquare, faTwitter); //fab

library.add(faCommentAlt, faHeart, faClock); //far

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
