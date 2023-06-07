<template>
    <div class="containerText"><p>MAX ARNOUTS</p></div>
    <div class="containerCarousel">
        <Carousel  :itemsToShow="3.95" :wrapAround="true" :transition="500">
            <Slide v-for="slide in slides" :key="slide">
                <div class="carousel__item">
                    <img class="imageContainer" :src="slide.imageUrl"/>
                    <h2>{{slide.contentName}}</h2>
                    <p>{{slide.sprint}}</p>
                </div>
            </Slide>
        </Carousel>
    </div>
  </template>

  <script>
  import { defineComponent } from 'vue'
  import { Carousel, Pagination, Slide } from 'vue3-carousel'

  import 'vue3-carousel/dist/carousel.css'

  export default defineComponent({
    name: 'Autoplay',
    components: {
      Carousel,
      Slide,
      Pagination,
    },
    data() {
      return {
        slides: [
            {imageUrl : "src/assets/KathleenLogoFlatRed2.png", contentName: "Kathleen Willemse"},
            {imageUrl : "src/assets/goalKeeperLogo_MaxV2.png", contentName: "KeepersWebShop", sprint: "Sprint 1"},
            {imageUrl : "src/assets/goalKeeperLogo_MaxV2.png", contentName: "KeepersWebShop", sprint: "Sprint 2"},
            {imageUrl : "src/assets/mcdonalds.png", contentName: "MacDonalds EK 2024", sprint: "Sprint 1"},
            {imageUrl : "src/assets/mcdonalds.png", contentName: "MacDonalds EK 2024", sprint: "Sprint 2"},
        ], // Example data for the slides
      }
    },
  })
  </script>

  <style scoped>
    .containerText {
        display: flex;
        justify-content: center;
        /* margin-top: 100px; */
        /* position: absolute; */
        font-size: 200px;
        color: white;
        z-index: -1;
    }
    .containerCarousel {
        margin-top: 200px;
        z-index: 10;
    }
    .imageContainer {
        width: 300px;
        height: 50%;
    }
    .carousel__item {
        background-color: #D3AE87;
        display: flex;
        justify-content: center;
        flex-direction: column;
        border-radius: 20px;
        height: 600px;
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
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
    }

    .carousel__slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.9);
    }

    .carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
    }

    .carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
    }

    .carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
    }
</style>
