<template>
  <!-- created by roshan -->
  <div>
    <b-row>
      <b-col md="3"> 
        <Formfilter> </Formfilter>
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

export default {
  components: {
    MadridTab,
    BookingCard,
    Formfilter 
  }
};
</script>
<style lang="scss"></style>
