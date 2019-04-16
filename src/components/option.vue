<template>
  <div class="box-option text-left py-2 px-3">
    <span class="text-secondary option-heading">Every option includes </span>
    <div class="text-secondary small">
      <span
        ><font-awesome-icon
          class="text-secondary mr-1 mt-2"
          :icon="['fas', 'air-freshener']"
        />Air conditioning</span
      >
    </div>
    <div class="text-secondary small">
      <span
        ><font-awesome-icon
          class="text-secondary mr-1 mt-2"
          :icon="['fas', 'bath']"
        />Private bathroom</span
      >
    </div>
    <div class="text-secondary small">
      <span>
        <font-awesome-icon
          class="text-secondary mr-1 mt-2"
          :icon="['fas', 'tv']"
        />Flat screen Tv</span
      >
    </div>
    <div class="text-secondary small">
      <span
        ><font-awesome-icon
          class="text-secondary mr-1 mt-2"
          :icon="['fas', 'check-circle']"
        />Soundproofing</span
      >
      <span class="ml-2"
        ><font-awesome-icon
          class="text-secondary mr-1 mt-2"
          :icon="['fas', 'check']"
        />Bider</span
      >
    </div>
    <div class="text-secondary small">
      <span
        ><font-awesome-icon
          class="text-secondary mr-1 mt-2"
          :icon="['fas', 'check']"
        />Hypoallergenic</span
      >
    </div>
    <div class="text-secondary small">
      <span
        ><font-awesome-icon
          class="text-secondary mr-1 mt-2"
          :icon="['fas', 'check']"
        />15% off all car rentals</span
      >
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/booking/booking.scss";
.box-option {
  width: 287px;
  height: auto;
  border: 1px solid $grey-color;
}
.option-heading {
  font-size: 20px;
}
</style>
