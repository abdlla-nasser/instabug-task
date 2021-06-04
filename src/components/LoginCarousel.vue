<template>
  <div class="container">
    <div class="block">
      <el-carousel trigger="click" :interval="2000" arrow="never" height="350px">
        <el-carousel-item v-for="item in images" :key="item.alt">
          <img :src="item.source" :alt="item.alt" />
        </el-carousel-item>
      </el-carousel>

    </div>
  </div>
</template>
<script>
import image1 from "../assets/Product-overview.svg"
import image2 from "../assets/Products-bug-reporting.svg"
import image3 from "../assets/Products-crash-reporting.svg"
export default {
  name: "LoginCarousel",
  data() {
    return {
      images: [
        { source: image1, alt: "product overview"},
        { source: image2, alt: "products bug reporting"},
        { source: image3, alt: "products crash reporting"}
      ]
    }
  },
};
</script>
<style lang="scss">
.container {
  --carousel-color-primary: #fff;
  --carousel-color-secondary: transparent;
  background-color: #00287a;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  div{
    width: 100%;
  }
}
img{
  width: 300px;
}
.el-carousel__button {
  height: 15px!important;
  width: 15px!important;
  border-radius: 50%;
}
</style>
