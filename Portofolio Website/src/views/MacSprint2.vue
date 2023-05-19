<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="container_background">
        <div class="top_section">
        <img  class="logo" src="@/assets/mcdonalds.png" style="background-color: #264F36;" width="150" height="100%" />
        <div class="close">
            <RouterLink to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </RouterLink>
        </div>
    </div>
      <div class="container_MacSprint2_content">
        <h1>McDonald’s</h1>

        <h2>Over het project:</h2>
          In dit project gaan we een campagne maken voor de MacDonalds. De campagne gaat over het EK 2024 voor de MacDonalds verder laar ik zien in wat ik allemaal heb gemaakt in dit project.
        <h2>Sprint 2</h2>

        <h3>Onderzoek penaltyShooter:</h3>
        Voordat ik verder ben gegaan met het realiseren van de penalty shooter ben ik begonnen met een onderzoek naar bestaande penalty shooters.

        <h3>Prototype penaltyShooter:</h3>
        Bij deze sprint ben ik begonnen met maken van de penaltyShooter. Hier heb veel verschillende dingen geleerd zoals werken met animate.js, of het maken van een timing balk.
        <img src="@/assets/penaltyShooter.png" width="100%" />

        <h1>Leeruitkomsten die ik aan toon in dit project:</h1>
            <div class="container_buttons_sprint2_macdonalds">
                <button><RouterLink to="/leeruitkomsten">Research</RouterLink></button>
                <button><RouterLink to="/leeruitkomsten">Development</RouterLink></button>
            </div>
      </div>
    </div>
</template>
<style>
button {
    background-color: black;
    border: none;
    color: #D3AE87;
    width: 30%;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
}

.button:hover {
    background-color: #D3AE87;
    color: black;
}
.container_buttons_sprint2_macdonalds {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
}
.container_background {
    background-color: #D3AE87;
}
.container_MacSprint2_content {
    display: flex;
    flex-direction: column;
    height: 80vh;
    margin-left: 10%;
    margin-right: 10%;
}
.container_MacSprint2_content h1 {
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
