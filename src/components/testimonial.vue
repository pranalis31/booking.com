<template>
   <b-row>
     <div class=" text-left small" v-for="image in images" v-bind:key="image.index">
         <span class="text-dark text-left">
             {{image.heading}}
         </span>
         <b-row>
          <b-col md="2">
          <div class="img-display mt-3 text-left">
            <figure>
              <b-img :src="image.img" class="img-size" alt="img1" /> 
            </figure>
          </div>
          </b-col>
          <b-col md="10" class="text-left mt-3">
              <span class="text-dark font-weight-bold">{{image.title}}</span>
                 <div>  <font-awesome-icon class="text-primary " :icon="['fas', 'check-circle']"/> {{image.subtitle}}</div>
          </b-col>
         </b-row>
     </div>
   </b-row> 
</template>

<script>
import img1 from "../assets/images/img.jpeg";

export default {
  data() {
    return {
      images: [
        {
          heading: 'Excellent location Staff were helpful Room was good and very peaceful as well as site seeing looks pretty',
          img: img1,
          title:'Prazian',
          subtitle:'Denmmark'
        },
         {
          heading: 'Excellent location Staff were helpful Room was good and very peaceful as well as site seeing looks pretty',
          img: img1,
          title:'Prazian',
          subtitle:'Denmmark'
        },
         {
          heading: 'Excellent location Staff were helpful Room was good and very peaceful as well as site seeing looks pretty',
          img: img1,
          title:'Prazian',
          subtitle:'Denmmark'
        },
         {
          heading: 'Excellent location Staff were helpful Room was good and very peaceful as well as site seeing looks pretty',
          img: img1,
          title:'Prazian',
          subtitle:'Denmmark'
        },
         {
          heading: 'Excellent location Staff were helpful Room was good and very peaceful as well as site seeing looks pretty',
          img: img1,
          title:'Prazian',
          subtitle:'Denmmark'
        },
         {
          heading: 'Excellent location Staff were helpful Room was good and very peaceful as well as site seeing looks pretty',
          img: img1,
          title:'Prazian',
          subtitle:'Denmmark'
        },
         {
          heading: 'Excellent location Staff were helpful Room was good and very peaceful as well as site seeing looks pretty',
          img: img1,
          title:'Prazian',
          subtitle:'Denmmark'
        },
         {
          heading: 'Excellent location Staff were helpful Room was good and very peaceful as well as site seeing looks pretty',
          img: img1,
          title:'Prazian',
          subtitle:'Denmmark'
        },
         {
          heading: 'Excellent location Staff were helpful Room was good and very peaceful as well as site seeing looks pretty',
          img: img1,
          title:'Prazian',
          subtitle:'Denmmark'
        },
         {
          heading: 'Excellent location Staff were helpful Room was good and very peaceful as well as site seeing looks pretty',
          img: img1,
          title:'Prazian',
          subtitle:'Denmmark'
        }

      ]
    };
  }
};
</script>

<style lang="scss"scoped>
.img-size
{
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
</style>
