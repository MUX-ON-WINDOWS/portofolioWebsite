<template>
  <div class="container_carousel">
    <p class="display_name">MAX ARNOUTS</p>

    <swiper style="margin-top: 250px;" :slides-per-view="3" :space-between="30" @swiper="onSwiper" @slideChange="onSlideChange">
      <swiper-slide class="cards" v-for="n of 5" :key="n">
        <div v-if="n === 1"><img  class="logo" src="@/assets/KathleenLogoFlatRed2.png" width="246" height="125" />
          <h2>Project {{ n }}</h2>
        </div>
        <div v-if="n === 2"><img class="logo" src="@/assets/goalKeeperLogo_MaxV2.png" width="246" height="125" />
          <h2>Project {{ n }}</h2>
        </div>
        <div v-if="n === 3"><img class="logo" src="@/assets/mcdonalds.png" width="200" height="125" />
          <h2>Project {{ n }}</h2>
        </div>
        <div v-if="n === 4"><img class="logo" src="@/assets/mcdonalds.png" width="200" height="125" />
          <h2>Project {{ n }}</h2>
        </div>
        <div v-if="n === 5"><img class="logo" src="@/assets/logo.svg" width="246" height="125" />
          <h2>Project {{ n }}</h2>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
};
</script>

