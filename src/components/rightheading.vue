<template>
  <b-row>
    <b-col md="9" class="mt-2 text-left">
      <span class="text-light hotel bg-secondary small mr-2">Hotel </span>
      <span class="vincci-heading mr-1"> Vincci Centrium</span>
      <span class="star">
        <font-awesome-icon class="text-warning " :icon="['fas', 'star']" />
        <font-awesome-icon class="text-warning" :icon="['fas', 'star']" />
        <font-awesome-icon class="text-warning " :icon="['fas', 'star']" />
        <font-awesome-icon class="text-warning  mr-4" :icon="['fas', 'star']" />
      </span>
      <span class="bg-warning p-1 mt-0">
        <font-awesome-icon
          class="text-light"
          :icon="['fas', 'hand-point-right']"
        />
      </span>
      <div class="small">
        <font-awesome-icon
          class="text-primary mr-2"
          :icon="['fas', 'map-marker-alt']"
        />Cenderos 4 Centro,24810 Madrid,Spain-
        <span class="small text-primary font-weight-bold"
          ><a href="#">Excellent Location - Show Map </a></span
        >
      </div>
      <div class="text small font-weight-bold">
        <font-awesome-icon class="text mr-2" :icon="['fas', 'car']" /> Booking
        accomodation in Madrid and get 15% offf all car rentals
      </div>
    </b-col>
    <b-col md="3">
      <span>
        <font-awesome-icon
          class="text-primary size  mt-2"
          :icon="['far', 'heart']"
      /></span>
      <span>
        <font-awesome-icon
          class="text-primary size ml-2 mt-2"
          :icon="['fas', 'share-alt']"
      /></span>
      <button class="small bt-bg text-light mt-1 px-2 ml-2 font-weight-bold">
        Reserve
      </button>
      <div class="small italice font-weight-bold">
        <font-awesome-icon
          class="text-primary  mr-1 mt-3"
          :icon="['fas', 'check-circle']"
        />We Price Match
      </div>
    </b-col>
  </b-row>
</template>

<style lang="scss">
.hotel {
  padding: 3px 7px;
}
.vincci-heading {
  font-size: 23px;
  font-weight: bold;
}
.star {
  font-size: 10px;
}
.text {
  color: #fa832a;
}
.size {
  font-size: 20px;
}
</style>
