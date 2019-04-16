<template>
  <div>
    <checkboxcomponent filtertoptitle="Your budget">
      <template slot="checkboxLoopData">
        <div class="" v-for="budget in budgets" :key="budget.index">
          <div class="div-checkbox-content d-flex justify-content-between mb-1">
            <div class="d-flex">
              <input type="checkbox" class="custom-checkbox" />
              <div class="checkbox-title">{{ budget.name }}</div>
            </div>
            <div class="checkbox-number">{{ budget.number }}</div>
          </div>
        </div>
      </template>
    </checkboxcomponent>

    <checkboxcomponent filtertoptitle="Popular Filters">
      <template slot="checkboxLoopData">
        <div
          class=""
          v-for="popularFilter in popularFilters"
          :key="popularFilter.index"
        >
          <div class="div-checkbox-content d-flex justify-content-between mb-1">
            <div class="d-flex">
              <input type="checkbox" class="custom-checkbox" />
              <div class="checkbox-title">{{ popularFilter.name }}</div>
            </div>
            <div class="checkbox-number">{{ popularFilter.number }}</div>
          </div>
        </div>
      </template>
    </checkboxcomponent>

    <checkboxcomponent filtertoptitle="Star Ratings">
      <template slot="checkboxLoopData">
        <div class="" v-for="starRating in starRatings" :key="starRating.index">
          <div class="div-checkbox-content d-flex justify-content-between mb-1">
            <div class="d-flex">
              <input type="checkbox" class="custom-checkbox" />
              <div class="checkbox-title">{{ starRating.name }}</div>
            </div>
            <div class="checkbox-number">{{ starRating.number }}</div>
          </div>
        </div>
      </template>
    </checkboxcomponent>

    <checkboxcomponent filtertoptitle="Distance From city center">
      <template slot="checkboxLoopData">
        <div class="" v-for="distance in distances" :key="distance.index">
          <div class="div-checkbox-content d-flex justify-content-between mb-1">
            <div class="d-flex">
              <input type="checkbox" class="custom-checkbox" />
              <div class="checkbox-title">{{ distance.name }}</div>
            </div>
            <div class="checkbox-number">{{ distance.number }}</div>
          </div>
        </div>
      </template>
    </checkboxcomponent>

    <checkboxcomponent filtertoptitle="Districts">
      <template slot="checkboxLoopData">
        <div class="" v-for="district in districts" :key="district.index">
          <div class="div-checkbox-content d-flex justify-content-between mb-1">
            <div class="d-flex">
              <input type="checkbox" class="custom-checkbox" />
              <div class="checkbox-title">{{ district.name }}</div>
            </div>
            <div class="checkbox-number">{{ district.number }}</div>
          </div>
        </div>
      </template>
    </checkboxcomponent>
  </div>
</template>

<script>
import checkboxcomponent from "@/components/checkbox-component.vue";
export default {
  name: "NavBar",
  components: {
    checkboxcomponent
  },
  data() {
    return {
      budgets: [
        {
          name: "₹ 0 - ₹ 1,000 per night",
          number: "10"
        },
        {
          name: "₹ 1,000 - ₹ 2,000 per night",
          number: "55"
        },
        {
          name: "₹ 2,000 - ₹ 3,000 per night",
          number: "100"
        },
        {
          name: "₹ 4,000 - ₹ 5,000 per night",
          number: "100"
        },
        {
          name: "₹ 5,000 - ₹ 6,000 per night",
          number: "100"
        }
      ],
      popularFilters: [
        {
          name: "Centro",
          number: "10"
        },
        {
          name: "Hotels",
          number: "55"
        },
        {
          name: "Breakfast included",
          number: "100"
        },
        {
          name: "Parking",
          number: "100"
        },
        {
          name: "Apartments",
          number: "100"
        },
        {
          name: "Centro",
          number: "10"
        },
        {
          name: "Hotels",
          number: "55"
        },
        {
          name: "Breakfast included",
          number: "100"
        }
      ],
      starRatings: [
        {
          name: "1 star",
          number: "10"
        },
        {
          name: "2 star",
          number: "55"
        },
        {
          name: "3 star",
          number: "100"
        },
        {
          name: "4 star",
          number: "123"
        },
        {
          name: "5 star",
          number: "231"
        },
        {
          name: "Unrated",
          number: "11"
        }
      ],
      distances: [
        {
          name: "Less than 1 km",
          number: "10"
        },
        {
          name: "Less than 2 km",
          number: "55"
        },
        {
          name: "Less than 3 km",
          number: "100"
        }
      ],
      districts: [
        {
          name: "Andhra Pradesh",
          number: "10"
        },
        {
          name: "Arunachal Pradesh",
          number: "55"
        },
        {
          name: "Assam",
          number: "100"
        },
        {
          name: "Bihar",
          number: "10"
        },
        {
          name: "Chhattisgarh",
          number: "55"
        },
        {
          name: "Goa",
          number: "100"
        },
        {
          name: "Gujarat",
          number: "10"
        },
        {
          name: "Haryana",
          number: "55"
        },
        {
          name: "Himachal Pradesh",
          number: "100"
        },
        {
          name: "Jharkhand",
          number: "10"
        },
        {
          name: "Karnataka",
          number: "55"
        },
        {
          name: "Kerala",
          number: "100"
        },
        {
          name: "Madhya Pradesh",
          number: "10"
        },
        {
          name: "Maharashtra",
          number: "55"
        },
        {
          name: "Manipur",
          number: "100"
        },
        {
          name: "Meghalaya",
          number: "10"
        },
        {
          name: "Mizoram",
          number: "55"
        },
        {
          name: "Nagaland",
          number: "100"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.custom-checkbox {
  width: 18px;
  height: 18px;
  margin-right: 5px;
}

.div-checkbox-content {
  line-height: 20px;
  height: 20px;
}
.checkbox-title {
  font-size: 11px;
}
.checkbox-number {
  font-size: 11px;
  color: #ccc;
}
</style>
