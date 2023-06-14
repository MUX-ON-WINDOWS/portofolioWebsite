<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="container_background">
        <div class="top_section">
        <img  class="logo" src="@/assets/goalKeeperLogo_MaxV2.png" width="168" height="125" />
        <div class="close">
            <RouterLink to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </RouterLink>
        </div>
    </div>
    <div class="container_KeeperSprint1_content">
            <h1>Keeperswebshop</h1>
            <h2>Over het project</h2>
            <p>
                Tijdens dit project heb ik een keeperswebshop gemaakt. Mijn doel is om een webshop te maken waar keepers spullen kunnen kopen
                (Denk hierbij aan keepershandschoenen en keeperskleding). Verder maak ik een website design, logo en een website.
            </p>
            <h2>Sprint 1</h2>

            <h3>Moodboard:</h3>
            <p>
                Voor het maken van het <a href="https://i507258.hera.fhict.nl/KeepersWebShop/moodboard.png">moodboard</a>
                heb ik eerst gezocht naar elementen die bij keepers passen. Hier opvolgend heb ik passende afbeeldingen gezocht voor mijn moodboard.

                <!-- Voor dat ik begon met designen heb ik eerst een
                <a href="https://www.figma.com/file/98FJ9ml8PfQ3Ie24TaC50l/Untitled?type=design&node-id=0%3A1&t=Vc3TbJxTVCx1d2UM-1">moodboard</a> gemaakt in figma.
                Hier voor heb ik inspiratie opgedaan in keeperwebshops en hier passende afbeeldingen voor gezocht. -->
            </p>
            <div class="container_moodboard">
                <img src="@/assets/moodboard.png" height="300px" width="300px"/>
            </div>
            <h3>Stylescape:</h3>
            <p>
                Na het maken van mijn moodboard ben ik begonnen met het maken van mijn
                <a href="https://i507258.hera.fhict.nl/KeepersWebShop/stylescapeEigenProject.png">stylescape</a>.
                Tijdens het ontwikkelen van mijn stylescape heb ik gekeken welke kleuren en lettertype het beste bij mijn stylescape past.
                De stylescape is hieronder weergegeven.
                <!-- Hierbij heb ik gekeken naar de kleuren en lettertype die ik ging gebruiken. -->
            </p>
            <div class="container_stylescape">
                <img src="@/assets/stylescapeEigenProject.png"/>
            </div>
            <h3>Website design sprint 1:</h3>
            <p>
                Ik heb gezocht naar bestaande keeperswebshops. Hier kwam ik tot de conclusie dat deze webshops allemaal uit dezelfde elementen zijn opgebouwd.
                Aan de hand van deze informatie heb ik een begin gemaakt aan mijn
                <a href="https://www.figma.com/file/98FJ9ml8PfQ3Ie24TaC50l/Untitled?type=design&node-id=0%3A1&t=Vc3TbJxTVCx1d2UM-1">design</a>
                van mijn eigen keeperswebshop.

                <!-- Eerst heb ik onderzoek gedaan naar bestaande webshops voor keepers hier bleek dat er weinig website waren voor keepers.
                Daarom heb ik ook naar andere webshops gezocht die voor voetbal of voor hockey waren.
                Na dit onderzoek ben ik begonnen met mijn eerste paar versie’s. -->
            </p>
            <h3>Logo:</h3>
            <p>
                Ik heb een <a href="https://i507258.hera.fhict.nl/KeepersWebShop/eigenProject_Logo%27s.pdf">logo</a> gemaakt die duidelijk aangeeft dat het om een keeperswebshop gaat.
                Ik heb als eerst een icoon gemaakt van een duikende keeper.
                Vervolgens heb ik met verschillende kleuren getest om te bepalen welke het beste bij dit logo past.
                Ook heb ik de naam van de webshop toegevoegd aan het logo. Zie hieronder mijn eindresultaat.

                <!-- Voor dit logo ben ik begonnen met het creëren van een afbeelding van een duikende keeper.
                Vervolgens heb ik verschillende kleuren getest om te bepalen welke het beste bij dit logo pasten.
                Met de feedback Pieter heb ik een hoop nuttige dingen kunnen aanpassen aan mijn logo, en ook gaf hij aan dat de naam van de webshop ontbrak.
                Nadat ik de naam had toegevoegd, had ik uiteindelijk een compleet logo. -->
            </p>
            <div class="container_images">
                <!-- <img src="@/assets/BlueBGLogoV2.png"/>
                <img src="@/assets/YellowBGLogoV2.png"/> -->
                <img src="@/assets/goalKeeperLogo_MaxV2.png">
            </div>

            <h1>Leeruitkomsten die ik aan toon in dit project:</h1>
            <div class="container_buttons">
                <button><RouterLink to="/leeruitkomsten">Research</RouterLink></button>
                <button><RouterLink to="/leeruitkomsten">INTERACTIVE MEDIA</RouterLink></button>
                <button><RouterLink to="/leeruitkomsten">Design</RouterLink></button>
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
.container_stylescape {
    height: 600px;
}
.container_stylescape img {
    width: 100% !important;
}
.container_images {
    height: 120px;
    margin: 10px;
}
.container_images img {
  height: 120px;
  width: 168px !important;
}
.container_buttons, .container_images {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    gap: 10px;
}
.container_background {
    background-color: #D3AE87;
}
.container_KeeperSprint1_content {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: 10%;
    margin-right: 10%;
}
.container_KeeperSprint1_content h1 {
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
