<template>
  <!-- created by roshan -->
  <div>
    <b-row>
      <b-col md="9">
        <div class="text-left mt-2">
          <div class="madrid-title">Madrid</div>
          <div>
            <span class="small text-secondary">3 reasons to visit:</span>
            <span class="small font-weight-bold text-secondary"
              >Prado Museum, Plaza Mayor, Retiro Park
            </span>
            <br />
            <span class="text-secondary small">
              There's an indelible 'something extra' to life in Madrid. Whether
              its an additional flourish in Goya's paintings that line the
              Prado, or the extra pinch of paprika that adds a kick to the
              already famo...</span
            >
            <span>
              <a href="#" class="small font-weight-bold text-primary">
                Show more</a
              ></span
            >
          </div>
        </div>
      </b-col>
      <b-col md="3">
        <div class="text-right">
          <figure>
            <div>
              <b-img :src="Gmap" fluid alt="Fluid image" class="g-img"></b-img>
            </div>
          </figure>
        </div>
      </b-col>
    </b-row>
    <hr />
  </div>
</template>
<script>
import images1 from "../assets/images/g-map2.jpg";
export default {
  data() {
    return {
      Gmap: images1
    };
  }
};
</script>
<style lang="scss">
.madrid-title {
  font-size: 30px;
}
.g-img {
  border-radius: 5px;
  border: 1px solid rgb(192, 187, 187);
  height: 77px;
  margin-top: 30px;
}
</style>
