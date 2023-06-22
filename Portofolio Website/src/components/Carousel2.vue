<template>
    <div class="containerText"><p>MAX ARNOUTS</p></div>
    <div class="containerCarousel">
        <Carousel :itemsToShow="3.95" :wrapAround="true" :transition="500" paginationColor="gray" paginationActiveColor="red">
            <Slide v-for="slide in slides" :key="slide">
                <div :style="{ backgroundColor: slide.backgroundColor }" class="carousel__item">
                    <img :style="{ width: slide.width }" class="imageContainer" :src="slide.imageUrl"/>
                    <RouterLink style="text-decoration: none; color: black !important;" :to="slide.linkPage">Projecten
                        <h2 :style="{ color: slide.color }">{{slide.contentName}}</h2>
                        <p :style="{ color: slide.color }">{{slide.sprint}}</p>
                    </RouterLink>
                </div>
            </Slide>
            <template #addons>
                <Pagination />
                <Navigation />
            </template>
        </Carousel>
    </div>
</template>

  <script>
  import { defineComponent } from 'vue'
  import { Carousel, Pagination, Navigation, Slide } from 'vue3-carousel'

  import 'vue3-carousel/dist/carousel.css'

  export default defineComponent({
    name: 'Autoplay',
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation
    },
    data() {
      return {
        slides: [
            {imageUrl : "/assets/KathleenLogoFlatRed2.png", contentName: "Kathleen Willemse", linkPage: "/Kathleen", backgroundColor: "#D3AE87", width: "350px", color: "black"},
            {imageUrl : "/assets/goalKeeperLogo_MaxV2.png", contentName: "KeepersWebShop", sprint: "Sprint 1", linkPage: "/KeeperSprint1", backgroundColor: "#D3AE87", width: "300px", color: "black"},
            {imageUrl : "/assets/goalKeeperLogo_MaxV2.png", contentName: "KeepersWebShop", sprint: "Sprint 2", linkPage: "/KeeperSprint2", backgroundColor: "#D3AE87", width: "300px", color: "black"},
            {imageUrl : "/assets/goalKeeperLogo_MaxV2.png", contentName: "KeepersWebShop", sprint: "Sprint 3", linkPage: "/KeeperSprint3", backgroundColor: "#D3AE87", width: "300px", color: "black"},
            {imageUrl : "/assets/mcdonalds.png", contentName: "MacDonalds EK 2024", sprint: "Sprint 1", linkPage: "/MacSprint1", backgroundColor: "#264F36", width: "300px", color: "white"},
            {imageUrl : "/assets/mcdonalds.png", contentName: "MacDonalds EK 2024", sprint: "Sprint 2", linkPage: "/MacSprint2", backgroundColor: "#264F36", width: "300px", color: "white"},
            {imageUrl : "/assets/logo_wit.png", contentName: "Naakt", linkPage: "/naakt", backgroundColor: "#D3AE87", width: "350px", color: "black"},
        ], // Example data for the slides
      }
    },
  })
  </script>

  <style scoped>
    .containerText {
        display: flex;
        justify-content: center;
        font-size: clamp(10rem, 17vw, 20rem);
        color: white;
        z-index: -1;
        margin-top: -300px;
        white-space: nowrap;
    }
    .containerCarousel {
        margin-top: -25%;
        z-index: 10;
    }
    .imageContainer {
        /* width: 300px; */
        height: 50%;
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }
    .carousel__item {
        box-shadow: 0px 0px 15px 6px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        border-radius: 20px;
        height: 500px;
        width: 400px;
        transition: 500ms;
    }
    .carousel__item:hover {
        opacity: 1;
        transform: rotateY(0) scale(1.1);
    }
    .carousel__slide {
        padding: 5px;
    }

    .carousel__viewport {
        perspective: 2000px;
    }

    .carousel__track {
        transform-style: preserve-3d;
    }

    .carousel__slide--sliding {
        transition: 0.5s;
    }

    .carousel__slide {
        /* opacity: 0.9; */
        transform: rotateY(-20deg) scale(0.9);
    }

    .carousel__slide--active ~ .carousel__slide {
        transform: rotateY(20deg) scale(0.9);
    }

    .carousel__slide--prev {
        opacity: 1;
        transform: rotateY(-10deg) scale(0.9);
    }

    .carousel__slide--next {
        opacity: 1;
        transform: rotateY(10deg) scale(0.9);
    }

    /* .carousel__slide--active {
        opacity: 1;
        transform: rotateY(0) scale(1.05);
        height: 550px;
    } */
</style>
