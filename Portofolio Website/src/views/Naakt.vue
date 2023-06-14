<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="container_background">
        <div class="top_section">
            <img  class="logo" src="@/assets/logo_wit.png" width="246" height="125" />
        <div class="close">
            <RouterLink to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </RouterLink>
        </div>
    </div>
      <div class="container_MacSprint2_content">
        <h1>NAAKT</h1>

        <h2>Over het project</h2>
        <p>
            In dit project hebben we een website gemaakt voor een magazine NAAKT. NAAKT is een magazine dat speciaal is ontworpen voor
            jongeren tussen de 18 en 25 jaar oud en geschreven is door studenten van de ACE.
            Zelf heb ik me gericht op het maken van een Dashboard design en de development van de backend in de website =.
        </p>

        In dit project hebben we een brand gemaakt voor Kathleen Willems.
        Hieronder leg ik uit wat ik heb gemaakt in dit project en hoe ik mijn leerdoelen heb gerealiseerd.

        <h3>Dashboard design:</h3>
        <p>
            In dit project heb ik een dashboard design gemaakt voor een magazine website. In dit dashboard moeten de gebruikers (eigenaar van het blad)
            de artikelen en magazines kunnen beheren (Uploaden, verwijderen en bijwerken).
        </p>
        <div class="containerPenaltyShooterImages">
                <img src="@/assets/finalDashboard.png"/>
            </div>

        <h3>Development website NAAKT:</h3>
        <p>
            Ik heb de backend gemaakt van de <a href="https://github.com/m3m3n70-0/Naakt">NAAKT website</a> in Vue.js.
            Denk aan, login, dashboard en database connectie (PHP).
            Dit heb ik gemaakt met store, routings en database connectie.
        </p>
        <h1>Leeruitkomsten die ik aan toon in dit project:</h1>
            <div class="container_buttons_sprint2_macdonalds">
                <button><RouterLink to="/leeruitkomsten">Design</RouterLink></button>
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
    height: 100%;
    margin-left: 10%;
    margin-right: 10%;
}
.container_MacSprint2_content h1 {
    display: flex;
    align-items: center;
    justify-content: center;
}
.container_MacSprint2_content img {
    width: 600px !important;
    margin-top: 20px;
}
</style>
