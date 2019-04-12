<template>
     
        <b-row>
            
             <div class="reserve1 pt-2 px-1">
               <span class="small italics font-weight-bold text-dark"> 
            <font-awesome-icon class="text-primary mr-1 mt-3" :icon="['fas', 'check-circle']"/>1,375 peoples are currently looking for a place in madrid</span>
            </div>

            <div class="mt-3 mb-3">
                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15085.89263906098!2d72.85745569999999!3d19.042923249999998!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1554814434759!5m2!1sen!2sin" width="289" height="200" frameborder="0" style="border:0" allowfullscreen></iframe>
                <div class="map-position">
                <span class="px-2 "><font-awesome-icon class="text-primary mr-1 mt-1" :icon="['fas', 'map-marker-alt']"/></span>
                 <div class="reserve border-inset">
                <button  class="btn-reserve font-weight-bold small shadow-inset">Reserve</button>
                 </div>
            </div>

            </div>

             <div class="reserve1 pt-2 margin-set px-2 text-left">
               <span class="font-weight-bold text-dark "> 
              How to get Vincci Centrium from Adlofo Suaraz Madrid Banaras Airport 
               </span>
             </div>
            <div class="border border-bottom airport-box text-left">
             <div class="py-2" ><span class="pb-2 border-bottom px-2"><font-awesome-icon class="text-primary mr-1 mt-1" :icon="['fas', 'car']"/>Taxi<span class="ml-5 pl-5 text-primary small">20 minutes</span></span></div>
            <div class="py-2"><span class="px-2 "><font-awesome-icon class="text-primary mr-1 mt-1" :icon="['fas', 'parking']"/>Parking available</span></div>
            </div>

          
             <div class="reserve1 mt-2 pt-2 px-1">
               <span class="small italics font-weight-bold text-dark">
                  Like this anyone but not sure yet? 
            </span>
              <b-button variant="outline-primary" class="px-5 mt-2 font-weight-bold">show similar hotels</b-button>
          </div>
           
           <div class="font-weight-bold text-dark my-2">
              What guest loved the most:
           </div>

        </b-row>
   
</template>


<style lang="scss"scoped>
@import "../assets/scss/booking/booking.scss";


.reserve1
{
  
   width: 286px;
   height: 90px;
   background-color: $navtext;
}
.airport-box
{
     width: 286px;
   height: auto;
   
}
.map-position
{
   position: relative;
   top:-146px;
}
.margin-set
{
   margin-top: -80px;
}
</style>