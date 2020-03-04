<template>
    <div class="banner">
        <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide><img src="../assets/images/img_1.jpg" alt=""/></swiper-slide>
    <swiper-slide><img src="../assets/images/img_2.jpg" alt=""/></swiper-slide>
    <swiper-slide><img src="../assets/images/img_3.jpg" alt=""/></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  }
};
</script>

<style>
.swiper-container {
  width: 6.4rem;
}
.swiper-container img {
  width: 100%;
}
</style>
