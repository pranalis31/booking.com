<template>
<div>
    <div class="footer-top">
      <div class="text-center p-5">
          <div class="text-light top-part-footer">Save Time , Save Money</div>
           <div class="text-light small">Sign up and we will send the best deals to you</div>
           <b-row>
            
               <b-col md="4" class=" mt-2 input-margin">
          
             <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
              <b-form-checkbox class="small text-light mt-2"
                 id="checkbox-1"
                 v-model="status"
                  name="checkbox-a"
                  value="accepted"
                  unchecked-value="not_accepted"
                   >
                  send me a link to booking.com for accepting the link
               </b-form-checkbox>
               </b-col>
               <b-col md="1">
                     <button  class="btn-reserve">Reserve</button>
               </b-col>
           
               </b-row>
        </div>
    </div>
     <div class="footer-middle">
        <div class="text-center">
              <b-button variant="outline-light" size=sm class="mt-4 text-light ">List Your property</b-button>
        </div>
        <div class="list mt-4 mb-1"  >
            <span ><a  class="text-light small font-weight-bold border-bottom mr-3" href="">Table Version</a></span>
            <span ><a  class="text-light small font-weight-bold border-bottom mr-3" href="">Mobile Version</a></span>
            <span ><a  class="text-light small font-weight-bold border-bottom mr-3" href="">Your Account</a></span>
            <span ><a  class="text-light small font-weight-bold border-bottom mr-3" href="">Make changes to your booking online</a></span>
            <span ><a  class="text-light small font-weight-bold border-bottom mr-3" href="">Customer service help</a></span>
            <span ><a  class="text-light small font-weight-bold border-bottom mr-3" href="">Resume on offline</a></span>
            <span ><a  class="text-light small font-weight-bold border-bottom mr-3" href="">Booking.com for bussiness</a></span>
        </div>
            
    </div>
    <div class="footer-links m-3">
        <b-container>
            <b-row>
  <b-col md="2">
      <div class="column text-left small">
       <ul>
        <li><a href="#">Countries</a></li>
        <li><a href="#">Region</a></li>
        <li><a href="#">Cities</a></li>
        <li><a href="#">District</a></li>
        <li><a href="#">Airport</a></li>
        <li><a href="#">Hotels</a></li>
        <li><a href="#">places of interest</a></li>
       </ul>
      </div>
   </b-col>
 <b-col md="2">
      <div class="column text-left small">
        <ul>
        <li><a href="#">Holiday/rentals</a></li>
        <li><a href="#">Apartments</a></li>
        <li><a href="#">Resort</a></li>
        <li><a href="#">Villas</a></li>
        <li><a href="#">Hostels</a></li>
        <li><a href="#">Beds</a></li>
        <li><a href="#">Guest house</a></li>
       </ul>
      </div>
  </b-col>
  <b-col md="2">
       <div class="column text-left small">
        <ul>
        <li><a href="#">Unique place to stay</a></li>
        <li><a href="#">Reviwes</a></li>
        <li><a href="#">Unpacked Travel articles</a></li>
        <li><a href="#">Travel Communities</a></li>
       
       </ul>
       </div>
 </b-col>
   <b-col md="2">
        <div class="column text-left small">
        <ul>
        <li><a href="#">Car hire</a></li>
        <li><a href="#">Flight Finder</a></li>
        <li><a href="#">Restaurant resevation</a></li>
        <li><a href="#">Booking.com for travel Agent</a></li>
       
       </ul>
        </div>
   </b-col>
  <b-col md="2">
       <div class="column text-left small">
        <ul>
        <li><a href="#">About booking.com</a></li>
        <li><a href="#">Give website feedback</a></li>
        <li><a href="#">Customer Service help</a></li>
        <li><a href="#">Partners help</a></li>
        <li><a href="#">Career</a></li>
        <li><a href="#">Press Center</a></li>
        <li><a href="#">Investigator relation</a></li>
        <li><a href="#">Investigator relation</a></li>
         <li><a href="#">Term and Condition</a></li>
         <li><a href="#">Privacy and Cookie Staement</a></li>
         <li><a href="#">Corporate Statement</a></li>
       </ul>
       </div>
  </b-col>
         </b-row>
        </b-container>
      
      
        </div>
        
</div> 
</template>

<style lang="scss">
@import "../assets/scss/booking/booking.scss";
.footer-top
{
    width: 100%;
    height:230px;
    background-color: $footer-bg;
  
}
.input-margin
{
    margin-left: 271px;
}
.footer-middle
{
    width: 100%;
    height:120px;
    background-color: $head-top-hover;
  
}
.top-part-footer
{
    font-size:20px;
}
.btn-reserve
{
  background-color: #007cc1;
    padding: 7px 79px;
    margin-top: 9px;
    margin-left: -17px;
    border: none;
    color: #fff;
}
.column ul li{
list-style-type: none;
}
</style>
