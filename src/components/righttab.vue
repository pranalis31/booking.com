<template>
    <div>

    <b-tabs class="small tab-bg font-weight-bold">
      <b-tab no-body title="info $ prrice">
      
      </b-tab>

      <b-tab no-body title="facilities">
      
      </b-tab>

      <b-tab no-body title="Home rules">
       
      </b-tab>

      <b-tab title="The first print">
    
    
      </b-tab>
        <b-tab title="guest reviews">
    
    
      </b-tab>
    </b-tabs>
 
</div>
</template>
<style lang="scss">
@import "../assets/scss/booking/booking.scss";
.nav-link.active
{
    color: unset; 
    background-color:unset; 
     border-color: unset;  
}
.nav-item:hover {
    background-color: unset;
}
.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link
{
  color:$btn-blue !important;
  border:unset;
  background-color: $navtext !important;
}
.tab-bg
{
  background-color: $navtext;
}
</style>
