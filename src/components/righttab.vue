<template>
  <div>
    <b-tabs class="small tab-bg font-weight-bold">
      <b-tab no-body title="Info 	&amp; prrice "> </b-tab>

      <b-tab no-body title="Facilities"> </b-tab>

      <b-tab no-body title="House rules"> </b-tab>

      <b-tab title="The fine print"> </b-tab>
      <b-tab title="Guest reviews (2,462)"> </b-tab>
    </b-tabs>
  </div>
</template>
<style lang="scss">
@import "../assets/scss/booking/booking.scss";
.nav-link.active {
  color: unset;
  background-color: unset;
  border-color: unset;
}
.nav-item:hover {
  background-color: unset;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: $btn-blue !important;
  border: unset;
  background-color: $navtext !important;
}
.tab-bg {
  background-color: $navtext;
}
.nav-tabs .nav-item {
  margin-bottom: -1px;
  padding: 0 22px;
  border-right: 1px solid $navtext;
}
.nav-tabs {
  border-bottom: 1px solid $dark-blue !important;
}
.nav-tabs .nav-link:hover,
.nav-tabs .nav-link:focus {
  border-color: transparent !important;
}
</style>
