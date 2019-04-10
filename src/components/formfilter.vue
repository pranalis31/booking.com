<template>
  
  <b-row>
   <div class="form mb-2 px-3 pt-2rounded text-left">
    <span class="text-dark  search">Search</span>
    <form action="" method="post">

      <b-form-group class="small  mb-0"
      id="input-sml"
      label="Enter your name"
      label-for="input-horizontal"
      :invalid-feedback="invalidFeedback"
      :valid-feedback="validFeedback"
      :state="state"
    >
  
    <b-form-input id="input-sm" class="mt-0" size="sm"></b-form-input>
 
    </b-form-group>
     
      <b-form-group class="small mb-0"
      id="input-sml"
      label="Check-in date"
      label-for="input-horizontal"
      :invalid-feedback="invalidFeedback"
      :valid-feedback="validFeedback"
      :state="state"
    >
  
    <b-form-input id="input-sm" type="date" class="mt-0" size="sm"></b-form-input>
 
    </b-form-group>

     <b-form-group class="small mb-0"
      id="input-sml"
      label="Check-out date"
      label-for="input-horizontal"
      :invalid-feedback="invalidFeedback"
      :valid-feedback="validFeedback"
      :state="state"
    >
  
    <b-form-input id="input-sm" type="date" class="mt-0" size="sm"></b-form-input>
 
    </b-form-group>

       <label class="small ">2 night-day</label>
     <b-form-select v-model="selected" class="mb-2">
       <option :value="null">Please select an option</option>
      <option value="a">Option A</option>
      <option value="b" disabled>Option B (disabled)</option>
      <optgroup label="Grouped Options">
        <option :value="{ C: '3PO' }">Option with object value</option>
        <option :value="{ R: '2D2' }">Another option with object value</option>
      </optgroup>
      </b-form-select>
       <b-row>
           <b-col md="6">
                <b-form-select v-model="selected" class="mb-1">
                 <option :value="null">Please select an option</option>
                  <option value="a">Option A</option>
                   <option value="b" disabled>Option B (disabled)</option>
                    <optgroup label="Grouped Options">
                   <option :value="{ C: '3PO' }">Option with object value</option>
                    <option :value="{ R: '2D2' }">Another option with object value</option>
                   </optgroup>
                  </b-form-select>
             </b-col>
             <b-col md="6">
                  <b-form-select v-model="selected" class="mb-1">
                   <option :value="null">Please select an option</option>
                  <option value="a">Option A</option>
                    <option value="b" disabled>Option B (disabled)</option>
                    <optgroup label="Grouped Options">
                    <option :value="{ C: '3PO' }">Option with object value</option>
                      <option :value="{ R: '2D2' }">Another option with object value</option>
                     </optgroup>
                   </b-form-select>
                 
             </b-col>
               
          </b-row>
          
           <b-form-group label="" class="mb-0">
               <b-form-radio-group
                v-model="selected"
               :options="options"
                 plain
                 stacked
                  name="plain-stacked"
              ></b-form-radio-group>
               </b-form-group> 

               <div class="text-right mt-0">
                 <button  class="bt-bg text-light px-3 py-2 font-weight-bold">Search</button> 
               </div>
          </form>

     </div>
    </b-row>
   
</template>

<script>
export default {
  data() {
    return {
      selected: "first",
      options: [
        { text: "I am travelling for work ", value: "I am travelling for work" }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../assets/scss/booking/booking.scss";
.form
{
    width: 286px;
    height: 417px;
    background-color:$bg-form ;

}
.search {
  font-size: 25px;
}
.bt-bg {
  background-color: $btn-blue;
}
</style>
