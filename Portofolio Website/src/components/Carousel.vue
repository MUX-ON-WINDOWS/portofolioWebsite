<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container_carousel">
    <p class="display_name">MAX ARNOUTS</p>
    <swiper style="margin-top: 250px;" :slides-per-view="3" :space-between="30" @swiper="onSwiper" @slideChange="onSlideChange">
      <swiper-slide class="cards" v-for="n of 5" :key="n">
        <RouterLink to="/Kathleen">
          <div v-if="n === 1"><img  class="logo" src="@/assets/KathleenLogoFlatRed2.png" width="246" height="125" />
            <h2>Kathleen Willemse </h2>
          </div>
        </RouterLink>
        <RouterLink to="/KeeperSprint1">
          <div v-if="n === 2"><img class="logo" src="@/assets/goalKeeperLogo_MaxV2.png" width="246" height="125" />
            <h2>KeepersWebShop</h2>
            <p>Sprint 1</p>
          </div>
        </RouterLink>
        <RouterLink to="/KeeperSprint2">
          <div v-if="n === 3"><img class="logo" src="@/assets/goalKeeperLogo_MaxV2.png" width="246" height="125" />
            <h2>KeepersWebShop</h2>
            <p>Sprint 2</p>
          </div>
        </RouterLink>
        <RouterLink to="/MacSprint1">
          <div v-if="n === 4"><img class="logo" src="@/assets/mcdonalds.png" width="200" height="125" />
            <h2>MacDonalds EK 2024</h2>
            <p>Sprint 1</p>
          </div>
        </RouterLink>
        <RouterLink to="/MacSprint2">
          <div v-if="n === 5"><img class="logo" src="@/assets/mcdonalds.png" width="200" height="125" />
            <h2>MacDonalds EK 2024</h2>
            <p>Sprint 2</p>
          </div>
        </RouterLink>
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

