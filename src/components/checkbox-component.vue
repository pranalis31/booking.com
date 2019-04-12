<template>
  <div class="mt-3 px-2">
    <div class="ListSelectortitleText mt-3 mb-1">{{ filtertoptitle }}</div>
    <div class="checkboxfilter">
      <slot name="checkboxLoopData"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "checkbox-component",
  props: {
    filtertoptitle: String
  }
};
</script>
<style scoped lang="scss">
.ListSelectortitleText {
  text-align: left;
  color: #2f3030;
  font-size: 12px;
  font-weight: 700;
}
</style>
