<template>
  <!-- created by roshan -->
  <div>
    <b-row>
      <b-col md="3">
        <div class="px-3">
          <Formfilter> </Formfilter>
        </div>
        <Bookingfilter> </Bookingfilter>
      </b-col>
      <b-col md="9">
        <!-- using component -->
        <MadridTab> </MadridTab>
        <BookingCard></BookingCard>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import MadridTab from "@/components/madrid-tabs.vue";
import BookingCard from "@/components/booking-cards.vue";
import Formfilter from "@/components/formfilter.vue";
import Bookingfilter from "@/components/booking-filter.vue";

export default {
  components: {
    MadridTab,
    BookingCard,
    Formfilter,
    Bookingfilter
  }
};
</script>
<style lang="scss"></style>
