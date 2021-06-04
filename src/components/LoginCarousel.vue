<template>
  <div class="container">
    <div class="block">
      <!-- :interval="2000" trigger="click"  -->
      <el-carousel
        interval="2000"
        :pause-on-hover="false"
        arrow="never"
        height="600px"
      >
        <el-carousel-item v-for="item in images" :key="item.alt">
          <img :src="item.source" :alt="item.alt" />
          <h2>{{ item.text }}</h2>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
import image1 from "../assets/Product-overview.svg";
import image2 from "../assets/Products-bug-reporting.svg";
import image3 from "../assets/Products-crash-reporting.svg";
export default {
  name: "LoginCarousel",
  data() {
    return {
      images: [
        {
          source: image1,
          alt: "product overview",
          text: "Accelerate Your Entire Mobile Team Workflow",
        },
        {
          source: image2,
          alt: "products bug reporting",
          text: "The Most Comperhensive Bug Reporting Tool For Mobile Apps",
        },
        {
          source: image3,
          alt: "products crash reporting",
          text: "Secure Crash Reporting With Real-Time Alerts",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.container {
  --carousel-color-primary: #fff;
  --carousel-color-secondary: transparent;
  background-color: #00287a;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 100%;
  }
}
img {
  width: 50%;
}
h2 {
  color: white;
  margin: 0;
  margin-top: 20px;
}
.el-carousel__indicators {
  top: 460px;
}
.el-carousel__button {
  height: 15px !important;
  width: 15px !important;
  border-radius: 50%;
}
</style>
