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
            <h2>Sprint 3</h2>

            <h3>Website design sprint 3:</h3>
            <p>
                Het design die is gemaakt in sprint 1 was nog niet af. Voordat ik verder ging met het design heb ik eerst feedback gevraagd aan Pieter.
                Deze feedback is verwerkt in het <a href="https://i507258.hera.fhict.nl/KeepersWebShop/Iteratie%20beschrijving%20eigen%20project%20design%20week%203.pdf">design</a>
                van de keeperswebshop.
            </p>
            <h3>Gebruikersonderzoek website design:</h3>
            <p>
                Na het maken van het website design ben ik begonnen met een aantal vragen optezetten om deze aan mijn doelgroep te stellen.
                De antworden en vragen heb ik genoteerd in mijn <a href="https://i507258.hera.fhict.nl/research/Onderzoek%20webshop%20design.pdf">bestand</a>.
            </p>
            <div class="containerPenaltyShooterImages">
                <img src="@/assets/WebshopFinal.png"/>
            </div>

            <div class="container_buttons">
                <button><RouterLink to="/leeruitkomsten">INTERACTIVE MEDIA</RouterLink></button>
                <button><RouterLink to="/leeruitkomsten">Design</RouterLink></button>
                <button><RouterLink to="/leeruitkomsten">Research</RouterLink></button>
            </div>
        </div>
    </div>
</template>
<style>
.containerPenaltyShooterImages img {
    height: 500px;
    margin-bottom: 20px;
}
button {
    background-color: black;
    border: none;
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
.container_images {
  height: 200px;
}
.container_buttons, .container_images {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
}
.container_background {
    background-color: #D3AE87;
}
.container_KeeperSprint1_content {
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin-left: 10%;
    margin-right: 10%;
}
.container_KeeperSprint1_content h1 {
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
