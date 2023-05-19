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
    <div class="container_MacSprint1_content">
      <h1>McDonald’s</h1>

      <h2>Over het project:</h2>
        In dit project gaan we een campagne maken voor de MacDonalds. De campagne gaat over het EK 2024 voor de MacDonalds verder laar ik zien in wat ik allemaal heb gemaakt in dit project.
      <h2>Sprint 1</h2>

      <h3>Land kaarten:</h3>
        Bij het maken van deze kaarten heb ik veel ideeën opgedaan van bestaande FIFA kaarten. Van deze ideeën heb ik mijn iteraties gemaakt. En uiteindelijk met een eind versie gekomen.
      <h3>Speciale MacDonalds kaarten:</h3>
        Hier ben ik gaan testen hoe je het beste een kaart speciaal kan maken met een Macdonalds element. Hier heb ik gekozen voor een patroon met het Mac logo, een hamburger en een happy meal. Na een hoop iteraties heb ik hier ook een eind versie voor gemaakt.

      <h3>Prototype penaltyShooter:</h3>
        Bij het maken van de prototype van de penaltyShooter heb ik het design gebruikt van Joey. Voor dat ik ben begonnen met het maken van de prototype, heb ik eerst alles uitgewerkt in een schema hoe ik de opdracht zag en waar ik mogelijk op vast kan lopen.

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
.container_buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}
.container_background {
    background-color: #D3AE87;
}
.container_MacSprint1_content {
    display: flex;
    flex-direction: column;
    height: 210vh;
    margin-left: 10%;
    margin-right: 10%;
}
.container_MacSprint1_content h1 {
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
