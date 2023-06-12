<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="container_background">
        <div class="top_section">
        <img  class="logo" src="@/assets/goalKeeperLogo_MaxV2.png" width="246" height="125" />
        <div class="close">
            <RouterLink to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </RouterLink>
        </div>
    </div>
    <div class="container_KeeperSprint1_content">
            <h1>Over het project</h1>
            <p>In dit project ga ik een keeperswebshop realiseren. Hierbij begin ik met helemaal niks en ga ik alles zelf maken. Denk aan een website, logo, design en etc. Deze webshop word bedoeld voor keepers om keepersspullen te kopen.</p>
            <h2>Sprint 1</h2>

            <h3>Moodboard:</h3>
            <p>
                Voor dat ik begon met designen heb ik eerst een <a href="https://www.figma.com/file/98FJ9ml8PfQ3Ie24TaC50l/Untitled?type=design&node-id=0%3A1&t=Vc3TbJxTVCx1d2UM-1">moodboard</a> gemaakt in figma. Hier voor heb ik inspiratie opgedaan in keeperwebshops en hier passende afbeeldingen voor gezocht.
            </p>
            <h3>Stylescape:</h3>
            <p>
                Na het maken van mijn moodboard ben ik begonnen met het maken van mijn <a href="https://www.figma.com/file/98FJ9ml8PfQ3Ie24TaC50l/Untitled?type=design&node-id=0%3A1&t=Vc3TbJxTVCx1d2UM-1">stylescape</a> met behulp van moodboard. Hierbij heb ik gekeken naar de kleuren die ik wilde gebruiken.
            </p>
            <div class="container_stylescape">
                <img src="@/assets/stylescapeEigenProject.png"/>
            </div>
            <h3>Website design:</h3>
            <p>
                Eerst heb ik onderzoek gedaan naar bestaande webshops voor keepers hier bleek dat er weinig website waren voor keepers. Daarom heb ik ook naar andere webshops gezocht die voor voetbal of voor hockey waren. Na dit onderzoek ben ik begonnen met mijn eerste paar versie’s.
            </p>
            <h3>Logo:</h3>
            <p>
                Voor dit logo ben ik begonnen met het creëren van een afbeelding van een duikende keeper. Vervolgens heb ik verschillende kleuren getest om te bepalen welke het beste bij dit logo pasten. Met de feedback Pieter heb ik een hoop nuttige dingen kunnen aanpassen aan mijn logo, en ook gaf hij aan dat de naam van de webshop ontbrak. Nadat ik de naam had toegevoegd, had ik uiteindelijk een compleet logo.
            </p>
            <div class="container_images">
                <img src="@/assets/BlueBGLogoV2.png"/>
                <img src="@/assets/goalKeeperLogo_MaxV2.png">
              <img src="@/assets/YellowBGLogoV2.png"/>
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
    height: 100%;
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
