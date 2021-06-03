<template>
  <div class="container">
    <carousel :items-to-show="1" snapAlign="center">
      <slide v-for="image of images" :key="image.alt">
        <div>
          <img :src="image.source" :alt="image.alt" />
        </div>
      </slide>
      <template #addons>
        <pagination />
      </template>
    </carousel>
  </div>
</template>
<script>

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
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
  components: {
    Carousel, Slide, Pagination
  }
};
</script>
<style lang="scss">
.container {
  --carousel-color-primary: #fff;
  --carousel-color-secondary: transparent;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00287a;
}
.carousel {
  width: 100%;
}
.carousel__track {
  width: inherit;
}
.carousel__slide {
  width: inherit;
  div {
    img {
      /* width: 60%; */
      height: 100%;
    }
  }
}
.carousel__pagination-button{
  width: 10px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid #eee
}
</style>
