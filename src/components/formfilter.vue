<template>
  <b-row>
    <div class="form mb-2 px-3 pt-2 mt-1 rounded text-left">
      <span class="text-dark search">Search</span>
      <form action method="post">
        <b-form-group
          class="small mb-0"
          id="fieldset-1"
          label="Destination / property name"
          label-for="input-1"
          :invalid-feedback="invalidFeedback"
          :valid-feedback="validFeedback"
          :state="state"
        >
          <b-form-input
            id="input-1 mb-0"
            class="small input-height "
            v-model="name"
            :state="state"
            placeholder="Madrid"
            trim
          ></b-form-input>
        </b-form-group>

        <b-form-group
          class="small mb-0 margin-spacing"
          id="input-sml"
          label="Check-in date"
          label-for="input-horizontal"
          :invalid-feedback="invalidFeedback"
          :valid-feedback="validFeedback"
          :state="state"
        >
        </b-form-group>
        <datepicker
          class="input-height p-0 mb-1"
          placeholder="19-April-2019"
          v-model="vmodelexample"
        ></datepicker>

        <b-form-group
          class="small  mb-0 margin-spacing"
          id="input-sml"
          label="Check-out date"
          label-for="input-horizontal"
          :invalid-feedback="invalidFeedback"
          :valid-feedback="validFeedback"
          :state="state"
        >
        </b-form-group>
        <datepicker
          class="input-height mb-1"
          placeholder="19-April-2019"
          v-model="vmodelexample"
        ></datepicker>

        <label class="small margin-spacing">2 night-day</label>
        <b-form-select v-model="selected11" class="input-height  mb-2 small">
          <option :value="null">2 Adults</option>
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
            <b-form-select v-model="selected" class="input-height  mb-1 ">
              <option :value="null">No child</option>
              <option value="a">Option A</option>
              <option value="b" disabled>Option B (disabled)</option>
              <optgroup label="Grouped Options">
                <option :value="{ C: '3PO' }">Option with object value</option>
                <option :value="{ R: '2D2' }"
                  >Another option with object value</option
                >
              </optgroup>
            </b-form-select>
          </b-col>
          <b-col md="6">
            <b-form-select v-model="selected1" class=" input-height  mb-1 ">
              <option class="option-font" :value="null">1 room</option>
              <option value="a">Option A</option>
              <option value="b" disabled>Option B (disabled)</option>
              <optgroup label="Grouped Options">
                <option :value="{ C: '3PO' }">Option with object value</option>
                <option :value="{ R: '2D2' }"
                  >Another option with object value</option
                >
              </optgroup>
            </b-form-select>
          </b-col>
        </b-row>

        <input type="checkbox" name="" id="footercheckbox1" />
        <span class="small"> I am travelling for work </span>
        <font-awesome-icon
          class="text-dark mr-1 mt-2"
          :icon="['fas', 'question-circle']"
        />

        <div class="text-right mt-2 mb-2">
          <button
            type="button"
            class="bt-bg border-0 text-light px-4 py-1 font-weight-bold"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  </b-row>
</template>

<script>
import Datepicker from "vuejs-datepicker";
export default {
  data() {
    return {
      selected: "null",
      selected1: "null",
      selected11: "null",
      options: [
        { text: "I am travelling for work ", value: "I am travelling for work" }
      ]
    };
  },
  components: {
    Datepicker
  }
};
</script>

<style lang="scss">
@import "../assets/scss/booking/booking.scss";
.form {
  width: 286px;
  height: auto;
  background-color: $bg-form;
  border-radius: 3px;
}
.search {
  font-size: 20px;
}
.bt-bg {
  background-color: $btn-blue;
  font-size: 19px;
}
.input-height {
  height: 28px !important;
  font-size: 12px !important;
}
.vdp-datepicker * {
  box-sizing: border-box;
  width: 100%;
  padding: 5px 4px;
}
.vdp-datepicker * {
  padding: 4px 4px;
}
.custom-select {
  padding: 0 0 0 6px !important;
}
label {
  margin-bottom: 0 !important;
}
.margin-spacing {
  margin-top: 12px;
}
</style>
