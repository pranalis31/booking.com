import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
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
  faCheckCircle
 
} from "@fortawesome/free-solid-svg-icons"; //fas fa

import {
  faLinkedinIn,
  faFacebookSquare,
  faTwitter

} from "@fortawesome/free-brands-svg-icons"; //fab

import { faCommentAlt } from "@fortawesome/free-regular-svg-icons";

library.add(faCaretDown, faTh, faDumbbell,faRupeeSign,faCheckCircle); //fas

library.add(faLinkedinIn, faFacebookSquare, faTwitter); //fab

library.add(faCommentAlt); //far

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
