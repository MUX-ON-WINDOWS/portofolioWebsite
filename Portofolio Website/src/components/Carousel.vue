<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container_carousel">
    <p class="display_name">MAX ARNOUTS</p>
    <swiper style="margin-top: 250px;" :slides-per-view="3" :space-between="30" :grabCursor="true" :pagination="{
        clickable: true,
      }">
      <swiper-slide class="cards">
        <RouterLink to="/Kathleen">
          <div><img class="logo" src="@/assets/KathleenLogoFlatRed2.png" width="246" height="125" />
            <h2>Kathleen Willemse </h2>
          </div>
        </RouterLink>
      </swiper-slide>
      <swiper-slide class="cards">
        <RouterLink to="/KeeperSprint1">
          <div><img class="logo" src="@/assets/goalKeeperLogo_MaxV2.png" width="246" height="125" />
            <h2>KeepersWebShop</h2>
            <p>Sprint 1</p>
          </div>
        </RouterLink>
      </swiper-slide>
      <swiper-slide class="cards">
        <RouterLink to="/KeeperSprint2">
          <div><img class="logo" src="@/assets/goalKeeperLogo_MaxV2.png" width="246" height="125" />
            <h2>KeepersWebShop</h2>
            <p>Sprint 2</p>
          </div>
        </RouterLink>
      </swiper-slide>
      <swiper-slide class="cards">
        <RouterLink to="/MacSprint1">
          <div><img class="logo" src="@/assets/mcdonalds.png" width="200" height="125" />
            <h2>MacDonalds EK 2024</h2>
            <p>Sprint 1</p>
          </div>
        </RouterLink>
      </swiper-slide>
      <swiper-slide class="cards">
        <RouterLink to="/MacSprint2">
          <div><img class="logo" src="@/assets/mcdonalds.png" width="200" height="125" />
            <h2>MacDonalds EK 2024</h2>
            <p>Sprint 2</p>
          </div>
        </RouterLink>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
