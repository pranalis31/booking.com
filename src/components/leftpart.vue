<template>
     <b-container>
        <b-row>
            
             <div class="reserve1 pt-2 px-1">
               <span class="small italics font-weight-bold text-dark"> 
            <font-awesome-icon class="text-primary mr-1 mt-3" :icon="['fas', 'check-circle']"/>1,375 peoples are currently looking for a place in madrid</span>
            </div>
            <div class="mt-3 mb-3">
                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15085.89263906098!2d72.85745569999999!3d19.042923249999998!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1554814434759!5m2!1sen!2sin" width="289" height="200" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
        </b-row>
     </b-container>
</template>


<style lang="scss"scoped>
@import "../assets/scss/booking/booking.scss";


.reserve1
{
  
   width: 286px;
   height: 90px;
   background-color: $navtext;
}


</style>