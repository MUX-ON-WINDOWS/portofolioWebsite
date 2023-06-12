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
      <div class="container_MacSprint2_content">
        <h1>MacDonalds EK 2024 sprint 2</h1>

        <h2>Over het project:</h2>
            <p>
                In dit project gaan we een campagne maken voor de MacDonalds. De campagne gaat over het EK 2024 voor de MacDonalds, verder laat ik zien in wat ik allemaal heb gemaakt in dit project.
            </p>
        <h2>Sprint 2</h2>

        <h3>Onderzoek penaltyShooter:</h3>
        <p>
            Voordat ik verder ben gegaan met het realiseren van de penalty shooter ben ik begonnen met een <a href="https://i507258.hera.fhict.nl/research/Penalty Shooter research.pdf">onderzoek</a> naar bestaande penalty shooters.
            Ik wou gaan zoeken naar bestaande projecten en hoe deze waren opgebouwd, en wat voor technieken ze hebben gebruikt. Helaas heb ik niet echt goede projecten kunnen vinden die mij verder konden helpen.
        </p>
        <h3>Prototype penaltyShooter sprint 2:</h3>
        <p>
            Bij deze sprint ben ik begonnen met maken van de <a href="https://git.fhict.nl/I509147/project-mccampaign">penaltyShooter</a>. Hier moest ik met verschillende dingen rekening houden zoals, animaties voor de bal, animaties wanneer er wordt gescoord of wanneer er wordt gemist.
            Ook moest ik er voor zorgen dat er een werkend scorebord was en ook een timing balk die de kans van scoren bepaalt
        </p>
        <div class="containerPenaltyShooterImages">
            <img src="@/assets/penaltyShooter.png" width="100%" />
            <img src="@/assets/animation.png" width="100%" />
        </div>
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
    height: 667px !important;
    width: 377px !important;
}
.containerPenaltyShooterImages{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;
}
</style>
