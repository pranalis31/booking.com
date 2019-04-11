<template>
    <b-row class="ml-1">
   
      <div  v-for="image in images" v-bind:key="image.index">
            <div class="img-color pt-2  px-5 ">
              <b-img :src="image.img" class="size-img" alt="img1" /> 
             
            </div>
          </div>
    
          
          <div class="" v-for="image1 in imagesmall" v-bind:key="image1.index">
             
           
             <b-img :src="image1.img" class="small-img mr-1 pt-1 pb-0" alt="img" /> 
           
          </div>

 
       </b-row> 
</template>

<style lang="scss">
.small-img
{
    width:50px;
    height:50px;
}
</style>

<script>
import img1 from "../assets/images/room.jpg";
import img2 from "../assets/images/room-sm.jpg";

export default {
  data() {
    return {
      images: [
        {
   
          img: img1

        
        },
      ],
     imagesmall:[
         {
           img:img1
         },
          {
           img:img2
         },
          {
           img:img1
         },
          {
           img:img2
         },
          {
           img:img1
         },
          {
           img:img2
         },
          {
           img:img1
         },
          {
           img:img2
         },
          {
           img:img1
         },
          {
           img:img1
         },
          {
           img:img2
         },
          {
           img:img1
         },
          {
           img:img2
         },
          {
           img:img2
         },
          {
           img:img1
         },
          {
           img:img2
         },
          {
           img:img1
         },
          {
           img:img1
          },
          {
           img:img2
         },
          {
           img:img1
         },
          {
           img:img2
         },
          {
           img:img1
         }, 
         {
           img:img2
         },
          {
           img:img2
         },
          {
           img:img2
         },
          {
           img:img2
         },
          {
           img:img2
         },
          {
           img:img2
         },
          {
           img:img2
         },
          {
           img:img2
         }

     ]

    };
  }
};
</script>

<style lang="scss">
@import "../assets/scss/booking/booking.scss";
.img-color
{
    width:800px;
    background-color: $navtext;
}
.size-img
{
    width:650px;
}
</style>
