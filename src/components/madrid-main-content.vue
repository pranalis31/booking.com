<template>
  <!-- created by roshan -->
  <div>
    <b-row>
      <b-col md="4"> </b-col>
      <b-col md="8"> 
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

export default {
  components: {
    MadridTab,
    BookingCard
  }
};
</script>
<style lang="scss"></style>
