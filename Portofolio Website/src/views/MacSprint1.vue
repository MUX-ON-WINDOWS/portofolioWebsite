<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="container_background">
        <div class="top_section">
            <img class="logo" style="background-color: #264F36; padding: 10px;" src="@/assets/mcdonalds.png" height="150" />
        <div class="close">
            <RouterLink to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </RouterLink>
        </div>
        </div>
        <div class="container_MacSprint1_content">
            <h1>MacDonalds EK 2024 sprint 1</h1>

            <h2>Over het project</h2>
            <p>
                We maken een campagne voor de MacDonalds. Dit project omvat meerdere sprints. De campagne gaat over het EK 2024 voor de MacDonalds verder laat ik zien en wat ik allemaal heb gemaakt in dit project.
            </p>
            <h2>Sprint 1</h2>

            <h3>Speciale MacDonalds kaarten:</h3>
            <p>
                Ik ben begonnen met het maken van <a href="https://i507258.hera.fhict.nl/Mac campaign/itteratiesMACspecialTeam.pdf">speciale kaarten</a>
                voor de MacDonalds (het MacDonalds team). Hier heb ik een patroon gemaakt die als achtergrond wordt gebruikt.
                Vervolgens ben ik gaan testen met kleuren en diepte in de kaarten.
            </p>
            <div class="containerImages">
                <img src="@/assets/HappyMealV2.png"/>
            </div>
            <h3>Voetbal kaarten:</h3>
            <p>
                Voor het creëren van de <a href="https://i507258.hera.fhict.nl/Mac campaign/Iteraties%20voetbal%20kaartjes.pdf">voetbalkaarten</a>
                heb ik gezocht naar bestaande voetbalkaarten (denk aan FIFA kaarten en panini kaarten).
                Hier heb ik een hoop inspiratie uit gehaald. Ook heb ik veel getest met verschillende kleuren en vormen.
                Het lastigste was om het MAC Donalds element
                er in te verwerken. Dit heb ik gedaan door de kleuren van de MacDonalds te gebruiken en de M van MacDonalds in de kaart te verwerken.
            </p>
            <div class="containerImages">
                <img src="@/assets/ThomasMuller.png"/>
            </div>
            <h3>Prototype penaltyShooter sprint 1:</h3>
            <p>
                Bij het maken van het prototype van de <a href="https://git.fhict.nl/I509147/project-mccampaign">penaltyShooter</a>
                heb ik het design gebruikt van Joey. Voordat ik ben begonnen met het maken van het prototype,
                heb ik eerst alles uitgewerkt in een schema hoe ik de opdracht zag en waar ik mogelijk op vast kon lopen.
            </p>
            <h1>Leeruitkomsten die ik aan toon in dit project:</h1>
            <div class="container_buttons">
                <button><RouterLink to="/leeruitkomsten">Research</RouterLink></button>
                <button><RouterLink to="/leeruitkomsten">INTERACTIVE MEDIA</RouterLink></button>
                <button><RouterLink to="/leeruitkomsten">Design</RouterLink></button>
                <button><RouterLink to="/leeruitkomsten">Communication</RouterLink></button>
            </div>
        </div>
    </div>
</template>
<style>
.containerImages {
    height: 300px;
}
.containerImages img {
    height: 300px;
}
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
    height: 100%;
    margin-left: 10%;
    margin-right: 10%;
}
.container_MacSprint1_content h1 {
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
