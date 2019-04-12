<template>
  <div class="border rounded">
    <div class="filterByTitle px-2 pt-3 pb-2">Filter by:</div>
    <hr class="mt-0" />
    <div class="">
      <checkboxfilter></checkboxfilter>
    </div>
  </div>
</template>
<script>
import checkboxfilter from "@/components/checkbox-filter.vue";

export default {
  components: {
    checkboxfilter
  }
};
</script>
<style lang="scss" scoped>
.filterByTitle {
  text-align: left;
  font-size: 13px;
  font-weight: bold;
  color: black;
}
</style>
