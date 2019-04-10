<template>
 
    <b-row>
      <div class="form mb-2 mt-4 p-3 text-left">
        <span class="text-dark  search">Search</span>
        <form action="" method="post">
          <b-form-group
            class="small"
            id="input-sml"
            label="Enter your name"
            label-for="input-horizontal"
            :invalid-feedback="invalidFeedback"
            :valid-feedback="validFeedback"
            :state="state"
          >
            <b-form-input id="input-sm" class="" size="sm"></b-form-input>
          </b-form-group>

          <b-form-group
            class="small"
            id="input-sml"
            label="Check-in date"
            label-for="input-horizontal"
            :invalid-feedback="invalidFeedback"
            :valid-feedback="validFeedback"
            :state="state"
          >
            <b-form-input
              id="input-sm"
              type="date"
              class=""
              size="sm"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="small "
            id="input-sml"
            label="check-out date"
            label-for="input-horizontal"
            :invalid-feedback="invalidFeedback"
            :valid-feedback="validFeedback"
            :state="state"
          >
            <b-form-input
              id="input-sm"
              type="date"
              class="m-0"
              size="sm"
            ></b-form-input>
          </b-form-group>

          <label class="small m-0">2 night-day</label>
          <b-form-select v-model="selected" class="mb-2">
            <option :value="null">Please select an option</option>
            <option value="a">Option A</option>
            <option value="b" disabled>Option B (disabled)</option>
            <optgroup label="Grouped Options">
              <option :value="{ C: '3PO' }">Option with object value</option>
              <option :value="{ R: '2D2' }"
                >Another option with object value</option
              >
            </optgroup>
          </b-form-select>
          <b-row>
            <b-col md="6">
              <b-form-select v-model="selected" class="mb-3 ">
                <option :value="null">Please select an option</option>
                <option value="a">Option A</option>
                <option value="b" disabled>Option B (disabled)</option>
                <optgroup label="Grouped Options">
                  <option :value="{ C: '3PO' }"
                    >Option with object value</option
                  >
                  <option :value="{ R: '2D2' }"
                    >Another option with object value</option
                  >
                </optgroup>
              </b-form-select>
            </b-col>
            <b-col md="6">
              <b-form-select v-model="selected" class="mb-3">
                <option :value="null">Please select an option</option>
                <option value="a">Option A</option>
                <option value="b" disabled>Option B (disabled)</option>
                <optgroup label="Grouped Options">
                  <option :value="{ C: '3PO' }"
                    >Option with object value</option
                  >
                  <option :value="{ R: '2D2' }"
                    >Another option with object value</option
                  >
                </optgroup>
              </b-form-select>
            </b-col>
          </b-row>
          <b-form-group label="">
            <b-form-radio-group
              v-model="selected"
              :options="options"
              plain
              stacked
              name="plain-stacked"
            ></b-form-radio-group>
          </b-form-group>
          <div class="text-right">
            <b-button class="bt-bg text-light">Search</b-button>
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
