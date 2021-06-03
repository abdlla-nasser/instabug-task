<template>
  <div class="container">
    <carousel :items-to-show="1" :snapAlign="center">
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
.carousel {
  width: 700px!important;
}
.carousel__track {
  width: 700px!important;
}
.carousel__slide {
  width: 100%!important
}
.carousel__pagination-button{
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.container {
  --carousel-color-primary: rgb(85, 84, 84);
  --carousel-color-secondary: rgb(158, 158, 158);
  width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00287a;
}
</style>
